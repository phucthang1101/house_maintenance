const formidable = require('formidable');
const _ = require('lodash');
const Product = require('../models/product');
const SingleService = require('../models/singleService');
const slugify = require('slugify');
const { errorHandler } = require('../helper/errHandler');

const { Storage } = require('@google-cloud/storage');
const fs = require('fs');
const HttpError = require('../models/http-error');
const mongoose = require('mongoose');

const { v4: uuidv4 } = require('uuid');
const fbId = 'houserepairimg';
const fbKeyFile = './houserepairimg-firebase-adminsdk-kqt4k-956e5ae5b0.json';
const storage = new Storage({ keyFilename: fbKeyFile });
const bucket = storage.bucket(`${fbId}.appspot.com`);

var uploadFileToFirebase = (localFile, remoteFile, fileContentType) => {
  let uuid = uuidv4();

  return bucket
    .upload(localFile, {
      destination: remoteFile,
      uploadType: 'media',
      metadata: {
        contentType: fileContentType,
        metadata: {
          firebaseStorageDownloadTokens: uuid,
        },
      },
    })
    .then((data) => {
      let file = data[0];

      return Promise.resolve(
        'https://firebasestorage.googleapis.com/v0/b/' +
          bucket.name +
          '/o/' +
          encodeURIComponent(file.name) +
          '?alt=media&token=' +
          uuid
      );
    });
};

exports.createProduct = (req, res, next) => {
  console.log('createProduct');
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, async (err, fields, files) => {
    if (err) {
      return next(new HttpError('Image could not be uploaded', 400));
    }

    // check for all fields
    const {
      name,
      slogan,
      description,
      overviewTitle,
      overviewDesc,
      singleServices,
      svgIcon,
      showing,
    } = fields;

    if (!name || !description || !singleServices || !slogan) {
      return res.status(400).json({
        error: 'All fields are required',
      });
    }

    if (!singleServices || singleServices.length === 0) {
      return res.status(400).json({
        error: 'At least one category is required',
      });
    }

    if (!overviewDesc || overviewDesc.length < 100) {
      return res.status(400).json({
        error: 'Content is too short',
      });
    }

    let product = new Product();
    product.name = name;
    product.slogan = slogan;
    product.description = description;
    product.slug = slugify(name).toLowerCase();
    product.overviewTitle = overviewTitle;
    product.overviewDesc = overviewDesc;
    product.mtitle = `${name} | ${process.env.APP_NAME}`;
    product.mdesc = description.substring(0, 160);
    product.svgIcon = svgIcon;
    product.showing = showing;

    let arrayOfSingleServices = singleServices && singleServices.split(',');

    if (files.photo) {
      let firebasePath = 'products/' + files.photo.name;
      uploadFileToFirebase(
        files.photo.path,
        firebasePath,
        files.photo.type
      ).then((downloadURL) => {
        //  console.log(downloadURL);
        product.photo = downloadURL;
        Product.findOne({ name }).exec((err, oldProduct) => {
          if (oldProduct) {
            // console.log('Check flag');
            return next(new HttpError('Product has already exist', 400));
          } else {
            product.photoName = files.photo.name;
            product.save((err, result) => {
              if (err) {
                console.log(err);
                return next(new HttpError(errorHandler(err), 400));
              }
              // res.json(result);
              Product.findByIdAndUpdate(
                result._id,
                { $push: { singleServices: arrayOfSingleServices } },
                { new: true }
              ).exec((err, result) => {
                if (err) {
                  return next(
                    new HttpError('Cannot save after push categories', 400)
                  );
                } else {
                  res.json(result);
                }
              });
            });
          }
        });
      });
    }
  });
};

exports.read = (req, res) => {
  const slug = req.params.slug.toLowerCase();
  //  console.log(slug)
  Product.findOne({ slug })
    .populate('singleServices', 'photo body')
    .exec((err, product) => {
      //    console.log(err)
      if (err || !product) {
        return res.status(400).json({
          error: 'Product not found !',
        });
      }
      res.json(product);
    });
};

exports.removeProduct = (req, res) => {
  const slug = req.params.slug.toLowerCase();

  Product.findOne({ slug }).exec((err, product) => {
    // console.log(product)
    if (err || !product) {
      return res.status(400).json({
        error: 'Product not found !',
      });
    }
    const file = bucket.file('products/' + product.photoName);

    file
      .delete()
      .then(() => {
        console.log(`Successfully deleted photo `);
      })
      .catch((err) => {
        console.log(`Failed to remove photo, error: ${err}`);
      });

    product.remove((err, deletedProduct) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json({
        message: 'Product deleted',
      });
    });
  });
};

exports.updateProduct = async (req, res, next) => {
  // console.log('updateProduct');
  const slug = req.params.slug.toLowerCase();
  // console.log(slug);
  let oldProduct;
  try {
    oldProduct = await Product.findOne({ slug });
  } catch (error) {
    return next(new HttpError(errorHandler(err), 400));
  }

  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, async (err, fields, files) => {
    if (err) {
      return next(new HttpError('Image could not be uploaded', 400));
    }

    // check for all fields
    const {
      name,
      slogan,
      description,
      overviewTitle,
      overviewDesc,
      singleServices,
      svgIcon,
      showing,
    } = fields;

    let oldSlug = oldProduct.slug;
    oldProduct = _.merge(oldProduct, fields);
    oldProduct.slug = oldSlug;
    oldProduct.showing = showing;

    if (description) {
      oldProduct.description = description;
      oldProduct.mdesc = description.substring(0, 200);
    }

    if (name) {
      oldProduct.name = name;
      oldProduct.mtitle = `${name} | ${process.env.APP_NAME}`;
    }

    if (singleServices) {
      oldProduct.singleServices = singleServices.split(',');
    }

    if (files.photo) {
      const file = bucket.file('products/' + oldProduct.photoName);
      // console.log('file: ', file);
      file
        .delete()
        .then(() => {
          console.log(`Successfully deleted photo `);
        })
        .catch((err) => {
          console.log(`Failed to remove photo, error: ${err}`);
        });

      let firebasePath = 'products/' + files.photo.name;
      const downloadURL = await uploadFileToFirebase(
        files.photo.path,
        firebasePath,
        files.photo.type
      );

      //console.log(downloadURL);
      oldProduct.photo = downloadURL;
      oldProduct.photoName = files.photo.name;
    }

    let result;
    try {
      result = await oldProduct.save();
    } catch (error) {
      console.log(err);
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json(result);
  });
};

/**
 * sell / arrival
 * by sell = /products?sortBy=sold&order=desc&limit=4
 * by arrival = /products?sortBy=createdAt&order=desc&limit=4
 * if no params are sent, then all products are returned
 */
exports.list = (req, res) => {
  let order = req.query.order ? req.query.order : 'asc';
  let sortBy = req.query.sortBy ? req.query.sortBy : '_id';
  let limit = req.query.limit ? parseInt(req.query.order) : 6;

  Product.find({ showing: true })
    .populate('singleServices', '_id name slug')
    .exec((err, products) => {
      if (err) {
        console.log(err);
        return res.status(400).json({
          error: 'Products not found',
        });
      }
      //SingleService.find({});
      // console.log('products: ', products)
      //   console.log('products: ', products[0].singleServices[0])
      res.send(products);
    });
};

/**
 *  This will find the products based on the req product category
 */

exports.listRelated = (req, res) => {
  let limit = req.body.limit ? parseInt(req.body.limit) : 6;

  const { _id, categories } = req.body;

  Product.find({ _id: { $ne: _id }, categories: { $in: categories } })
    .limit(limit)
    .select('name price photo')
    .exec((err, blogs) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json(blogs);
    });
};

/**
 * list products by search
 * we will implement product search in react frontend
 * we will show categories in checkbox and price range in radio buttons
 * as the user clicks on those checkbox and radio buttons
 * we will make api request and show the products to users based on what he wants
 */

// route - make sure its post

exports.listBySearch = (req, res) => {
  let order = req.body.order ? req.body.order : 'desc';
  let sortBy = req.body.sortBy ? req.body.sortBy : '_id';
  let limit = req.body.limit ? parseInt(req.body.limit) : 100;
  let skip = parseInt(req.body.skip);
  let findArgs = {};

  // console.log(order, sortBy, limit, skip, req.body.filters);
  // console.log("findArgs", findArgs);

  for (let key in req.body.filters) {
    if (req.body.filters[key].length > 0) {
      if (key === 'price') {
        // gte -  greater than price [0-10]
        // lte - less than
        findArgs[key] = {
          $gte: req.body.filters[key][0],
          $lte: req.body.filters[key][1],
        };
      } else {
        findArgs[key] = req.body.filters[key];
      }
    }
  }

  Product.find(findArgs)

    .populate('category')
    .sort([[sortBy, order]])
    .skip(skip)
    .limit(limit)
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: 'Products not found',
        });
      }
      res.json({
        size: data.length,
        data,
      });
    });
};

// try {
//   // Create new blob in the bucket referencing the file
//   const blob = bucket.file('products/' + files.photo.name);
//   console.log('photo: ',files.photo)
//   // Create writable stream and specifying file mimetype
//   const blobWriter = blob.createWriteStream({
//     metadata: {
//       contentType: files.photo.type,
//     },
//   });

//   blobWriter.on('error', (err) => next(err));

//   blobWriter.on('finish', async () => {
//     // Assembling public URL for accessing the file via HTTP
//     const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${
//       bucket.name
//     }/o/${encodeURI(blob.name)}?alt=media`;

//     console.log('publicUrl: ',publicUrl)
//     // Return the file name and its public URL

//     const file = bucket.file('products/' + files.photo.name);
//     file
//       .getSignedUrl({
//         action: 'read',
//         expires: '03-09-2491',
//       })
//       .then((signedUrls) => {
//         product.photo = signedUrls[0];
//       });
//     // console.log('product: ', product);
//       const downloadURL = file.getDownloadUrl();
//       console.log(downloadURL)
//     Product.findOne({ name }).exec((err, oldProduct) => {
//       if (oldProduct) {
//         // console.log('Check flag');
//         return next(new HttpError('Product has already exist', 400));
//       } else {
//         product.photoName = files.photo.name;

//         //      console.log('arrayOfCategories: ', arrayOfCategories,'type: ',typeof arrayOfCategories);
//         //   product.categories.push(arrayOfCategories);
//         product.save((err, result) => {
//           if (err) {
//             console.log(err);
//             return next(new HttpError(errorHandler(err), 400));
//           }
//           // res.json(result);
//           Product.findByIdAndUpdate(
//             result._id,
//             { $push: { singleServices: arrayOfSingleServices } },
//             { new: true }
//           ).exec((err, result) => {
//             if (err) {
//               return next(
//                 new HttpError('Cannot save after push categories', 400)
//               );
//             } else {
//               res.json(result);
//             }
//           });
//         });
//       }
//     });
//   });

//   // When there is no more data to be consumed from the stream
//   blobWriter.end(
//     fs.readFile(files.photo.path, async (err, data) => {
//       if (err) next(new HttpError('Could not read file', 400));
//     })
//   );
// } catch (error) {
//   return next(
//     new HttpError(`Error, could not upload file: ${error}`, 400)
//   );
// }
