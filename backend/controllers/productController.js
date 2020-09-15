const formidable = require('formidable');
const _ = require('lodash');
const Product = require('../models/product');
const slugify = require('slugify');
const { errorHandler } = require('../helper/errHandler');
const { Storage } = require('@google-cloud/storage');
const fs = require('fs');
const HttpError = require('../models/http-error');
const mongoose = require('mongoose');

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
      description,
      price,
      categories,
      quantity,
      shipping,
      showing,
    } = fields;

    if (
      !name ||
      !description ||
      !price ||
      !categories ||
      !quantity ||
      !shipping
    ) {
      return next(new HttpError('All fields are required', 400));
    }
    if (!categories || categories.length === 0) {
      return res.status(400).json({
        error: 'At least one category is required',
      });
    }
    // Create new storage instance with Firebase project credentials
    const storage = new Storage({
      projectId: process.env.GCLOUD_PROJECT_ID,
      keyFilename: process.env.GCLOUD_APPLICATION_CREDENTIALS,
    });
    // var storageRef = storage.ref();
    //console.log(storage);
    // Create a bucket associated to Firebase storage bucket
    const bucket = storage.bucket(
      process.env.GCLOUD_STORAGE_PRODUCTS_BUCKET_URL
    );

    let product = new Product();
    product.name = name;
    product.description = description;
    product.price = price;
    product.slug = slugify(name).toLowerCase();
    product.mtitle = `${name} | ${process.env.APP_NAME}`;
    product.mdesc = description.substring(0, 200);
    product.showing = showing;

    let arrayOfCategories = categories && categories.split(',');
    // categories and tags
    // let arrayOfCategories = categories.map((category) =>
    // mongoose.Types.ObjectId(category)
    // );
    //console.log(arrayOfCategories, typeof arrayOfCategories);
    // console.log(categories, typeof categories);

    if (files.photo) {
      try {
        // Create new blob in the bucket referencing the file
        const blob = bucket.file('products/' + files.photo.name);
        //console.log('blob: ',blob)
        // Create writable stream and specifying file mimetype
        const blobWriter = blob.createWriteStream({
          metadata: {
            contentType: files.photo.type,
          },
        });

        blobWriter.on('error', (err) => next(err));

        blobWriter.on('finish', async () => {
          // Assembling public URL for accessing the file via HTTP
          const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${
            bucket.name
          }/o/${encodeURI(blob.name)}?alt=media`;

          // Return the file name and its public URL

          const file = bucket.file('products/' + files.photo.name);
          file
            .getSignedUrl({
              action: 'read',
              expires: '03-09-2491',
            })
            .then((signedUrls) => {
              product.photo = signedUrls[0];
            });
          // console.log('product: ', product);

          Product.findOne({ name }).exec((err, oldProduct) => {
            if (oldProduct) {
              // console.log('Check flag');
              return next(new HttpError('Product has already exist', 400));
            } else {
              product.photoName = files.photo.name;

              //      console.log('arrayOfCategories: ', arrayOfCategories,'type: ',typeof arrayOfCategories);
              //   product.categories.push(arrayOfCategories);
              product.save((err, result) => {
                if (err) {
                  console.log(err);
                  return next(new HttpError(errorHandler(err), 400));
                }
                // res.json(result);
                Product.findByIdAndUpdate(
                  result._id,
                  { $push: { categories: arrayOfCategories } },
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

        // When there is no more data to be consumed from the stream
        blobWriter.end(
          fs.readFile(files.photo.path, async (err, data) => {
            if (err) next(new HttpError('Could not read file', 400));
          })
        );
      } catch (error) {
        return next(
          new HttpError(`Error, could not upload file: ${error}`, 400)
        );
      }
    }
  });
};

exports.read = (req, res) => {
  const slug = req.params.slug.toLowerCase();
  //  console.log(slug)
  Product.findOne({ slug }).exec((err, product) => {
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
  // Create new storage instance with Firebase project credentials
  const storage = new Storage({
    projectId: process.env.GCLOUD_PROJECT_ID,
    keyFilename: process.env.GCLOUD_APPLICATION_CREDENTIALS,
  });

  // Create a bucket associated to Firebase storage bucket
  const bucket = storage.bucket(process.env.GCLOUD_STORAGE_PRODUCTS_BUCKET_URL);

  const slug = req.params.slug.toLowerCase();

  Product.findOne({ slug }).exec((err, product) => {
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

exports.updateProduct = async (req, res) => {
  console.log('updateProduct');
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
      description,
      price,
      categories,
      quantity,
      shipping,
      showing,
    } = fields;

    if (
      !name ||
      !description ||
      !price ||
      !categories ||
      !quantity ||
      !shipping
    ) {
      return next(new HttpError('All fields are required', 400));
    }

    // Create new storage instance with Firebase project credentials
    const storage = new Storage({
      projectId: process.env.GCLOUD_PROJECT_ID,
      keyFilename: process.env.GCLOUD_APPLICATION_CREDENTIALS,
    });

    // Create a bucket associated to Firebase storage bucket
    const bucket = storage.bucket(
      process.env.GCLOUD_STORAGE_PRODUCTS_BUCKET_URL
    );
    // console.log('oldProduct: ', oldProduct);
    oldProduct = _.merge(oldProduct, fields);
    oldProduct.slug = slugify(name).toLowerCase();

    oldProduct.mtitle = `${name} | ${process.env.APP_NAME}`;
    oldProduct.mdesc = description.substring(0, 200);
    oldProduct.showing = showing;

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

    if (files.photo) {
      try {
        // Create new blob in the bucket referencing the file
        const blob = bucket.file('products/' + files.photo.name);
        //console.log('blob: ',blob)
        // Create writable stream and specifying file mimetype
        const blobWriter = blob.createWriteStream({
          metadata: {
            contentType: files.photo.type,
          },
        });

        blobWriter.on('error', (err) => next(err));

        blobWriter.on('finish', async () => {
          // Assembling public URL for accessing the file via HTTP
          const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${
            bucket.name
          }/o/${encodeURI(blob.name)}?alt=media`;

          // Return the file name and its public URL

          const file = bucket.file('products/' + files.photo.name);
          file
            .getSignedUrl({
              action: 'read',
              expires: '03-09-2491',
            })
            .then((signedUrls) => {
              oldProduct.photo = signedUrls[0];
            });
          // console.log('product: ', product);

          Product.findOne({ name }).exec((err, productExist) => {
            if (productExist) {
              // console.log('Check flag');
              return next(new HttpError('Product has already exist', 400));
            } else {
              oldProduct.photoName = files.photo.name;
              oldProduct.save((err, result) => {
                if (err) {
                  return next(new HttpError(errorHandler(err), 400));
                }
                // console.log('result: ', result);
                //  res.json(result);
                Product.findByIdAndUpdate(
                  result._id,
                  { $push: { categories: arrayOfCategories } },
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

        // When there is no more data to be consumed from the stream
        blobWriter.end(
          fs.readFile(files.photo.path, async (err, data) => {
            if (err) next(new HttpError('Could not read file', 400));
          })
        );
      } catch (error) {
        return next(
          new HttpError(`Error, could not upload file: ${error}`, 400)
        );
      }
    }
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
    .populate('category')
    .sort([[sortBy, order]])
    .limit(limit)
    .exec((err, products) => {
      if (err) {
        return res.status(400).json({
          error: 'Products not found',
        });
      }
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
