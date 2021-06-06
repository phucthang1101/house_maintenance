const Category = require('../models/category');
const { errorHandler } = require('../helper/errHandler');
const slugify = require('slugify');
const Product = require('../models/product');
const _ = require('lodash');
const formidable = require('formidable');
const { Storage } = require('@google-cloud/storage');
const fs = require('fs');
const HttpError = require('../models/http-error');

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

exports.createCategory = (req, res, next) => {
  //console.log('category')
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: 'Image could not upload',
      });
    }

    const { name, categoryDesc, services, showing } = fields;

    if (!name || !name.length) {
      return res.status(400).json({
        error: 'name is required',
      });
    }

    if (!categoryDesc || !categoryDesc.length) {
      return res.status(400).json({
        error: 'name is required',
      });
    }

    let arrayOfServices = services && services.split(',');

    let category = new Category();
    category.name = name;
    category.categoryDesc = categoryDesc;
    category.slug = slugify(name).toLowerCase();

    if (files.photo) {
      let firebasePath = 'products/' + files.photo.name;
      uploadFileToFirebase(
        files.photo.path,
        firebasePath,
        files.photo.type
      ).then((downloadURL) => {
        category.photo = downloadURL;
        Category.findOne({ name }).exec((err, categoryExist) => {
          if (categoryExist) {
            return next(new HttpError('Product has already exist', 400));
          } else {
            category.photoName = files.photo.name;
            category.save((err, result) => {
              if (err) {
                console.log(err);
                return next(new HttpError(errorHandler(err), 400));
              }
              Category.findByIdAndUpdate(
                result._id,
                { $push: { services: arrayOfServices } },
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

exports.listAllCategories = (req, res) => {
  Category.find({})
    .populate('services', '_id name slug description svgIcon')
    .exec((err, categories) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }

      res.json(categories);
    });
};

exports.readCategory = (req, res) => {
  const slug = req.params.slug.toLowerCase();

  Category.findOne({ slug }).exec((err, category) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json(category);
  });
};

exports.read = (req, res) => {
  const slug = req.params.slug.toLowerCase();

  let limit = req.body.limit ? parseInt(req.body.limit) : 10;
  let skip = req.body.skip ? parseInt(req.body.skip) : 0;

  Category.find({ slug }).exec((err, category) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }

    if (limit !== 0 || skip !== 0) {
      Product.find({ categories: category, showing: true })
        .sort({ createdAt: 'desc' })
        .populate('categories', '_id name slug')
        .skip(skip)
        .limit(limit)
        .select(
          '_id name slug description mtitle mdesc price categories quantity photo shipping createdAt updatedAt'
        )
        .exec((err, products) => {
          if (err) {
            return res.status(400).json({
              error: errorHandler(err),
            });
          }
          // console.log(listCategories)
          Category.find({}).exec((err, listCategories) => {
            if (err) {
              return res.status(400).json({
                error: errorHandler(err),
              });
            }
            res.json({
              category: category,
              products: products,
              listCategories: listCategories,
              size: products.length,
            });
          });
        });
    } else {
      Product.find({ categories: category, showing: true })
        .sort({ createdAt: 'desc' })
        .populate('categories', '_id name slug')
        .select(
          '_id name slug description mtitle mdesc price categories quantity photo shipping createdAt updatedAt'
        )
        .exec((err, products) => {
          if (err) {
            return res.status(400).json({
              error: errorHandler(err),
            });
          }
          // console.log(listCategories)
          Category.find({}).exec((err, listCategories) => {
            if (err) {
              return res.status(400).json({
                error: errorHandler(err),
              });
            }
            res.json({
              category: category,
              products: products,
              listCategories: listCategories,
            });
          });
        });
    }
  });
};

exports.deleteCategory = (req, res) => {
  const slug = req.params.slug.toLowerCase();

  Category.findOne({ slug }).exec((err, category) => {
    if (err || !category) {
      return res.status(400).json({
        error: 'Category not found !',
      });
    }
    const file = bucket.file('products/' + category.photoName);

    file
      .delete()
      .then(() => {
        console.log(`Successfully deleted photo `);
      })
      .catch((err) => {
        console.log(`Failed to remove photo, error: ${err}`);
      });

    category.remove((err, deletedcategory) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json({
        message: 'Category deleted',
      });
    });
  });
};

exports.updateCategory = async (req, res, next) => {
  let slug = req.params.slug.toLowerCase();
  let oldCategory;
  try {
    oldCategory = await Category.findOne({ slug });
  } catch (error) {
    return next(new HttpError(errorHandler(err), 400));
  }

  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, async (err, fields, files) => {
    if (err) {
      return next(new HttpError('Image could not be uploaded', 400));
    }

    let oldSlug = oldCategory.slug;
    oldCategory = _.merge(oldCategory, fields);
    oldCategory.slug = oldSlug; 
    const services = fields.services;
    if(services)
    {
      oldCategory.services = services.split(',');
    }
   
   
    //console.log(oldCategory);

    

    if (files.photo) {
      const file = bucket.file('products/' + oldCategory.photoName);
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
      oldCategory.photo = downloadURL;
      oldCategory.photoName = files.photo.name;

     
    }
    let result;
    try {
      result = await oldCategory.save();
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        error: errorHandler(error),
      });
    }
    res.json(result);
  });
};
