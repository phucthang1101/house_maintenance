const SingleService = require('../models/singleService');
const { errorHandler } = require('../helper/errHandler');
const slugify = require('slugify');
const formidable = require('formidable');
const _ = require('lodash');
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

exports.createSingleService = (req, res, next) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: 'Image could not upload',
      });
    }

    const { name, description, body, showing } = fields;

    if (!name || !name.length) {
      return res.status(400).json({
        error: 'name is required',
      });
    }

    if (!description || !description.length) {
      return res.status(400).json({
        error: 'name is required',
      });
    }

    if (!body || body.length < 200) {
      return res.status(400).json({
        error: 'Content is too short',
      });
    }

    let singleService = new SingleService();
    singleService.name = name;
    singleService.body = body;
    singleService.description = description;
    singleService.showing = showing;
    singleService.slug = slugify(name).toLowerCase();

    if (files.photo) {
      let firebasePath = 'products/' + files.photo.name;
      uploadFileToFirebase(
        files.photo.path,
        firebasePath,
        files.photo.type
      ).then((downloadURL) => {
        singleService.photo = downloadURL;
        SingleService.findOne({ name }).exec((err, oldSingleService) => {
          if (oldSingleService) {
            return next(new HttpError('Product has already exist', 400));
          } else {
            singleService.photoName = files.photo.name;

            singleService.save((err, result) => {
              if (err) {
                console.log(err);
                return next(new HttpError(errorHandler(err), 400));
              } else {
                res.json(result);
              }
            });
          }
        });
      });
    }
  });
};

exports.listAllSingleService = (req, res) => {
  SingleService.find({}).exec((err, singleService) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }

    res.json(singleService);
  });
};

exports.read = (req, res) => {
  const slug = req.params.slug.toLowerCase();

  SingleService.findOne({ slug }).exec((err, singleService) => {
    if (err) {
      //console.log(err)
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    // console.log(singleService)
    res.json(singleService);
  });
};

exports.removeSingleService = (req, res) => {
  const slug = req.params.slug.toLowerCase();
  SingleService.findOne({ slug }).exec((err, singleService) => {
    if (err || !singleService) {
      return res.status(400).json({
        error: 'SingleService not found !',
      });
    }
    const file = bucket.file('products/' + singleService.photoName);

    file
      .delete()
      .then(() => {
        console.log(`Successfully deleted photo `);
      })
      .catch((err) => {
        console.log(`Failed to remove photo, error: ${err}`);
      });

    singleService.remove((err, deletedSingleService) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json({
        message: 'singleService deleted',
      });
    });
  });
};

exports.updateSingleService = async (req, res, next) => {
  //console.log('updateSingleService');
  const slug = req.params.slug.toLowerCase();
  // console.log(slug);
  let oldSingleService;
  try {
    oldSingleService = await SingleService.findOne({ slug });
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
    const { name, description, body, showing } = fields;

    let oldSlug = oldSingleService.slug;
    oldSingleService = _.merge(oldSingleService, fields);
    oldSingleService.slug = oldSlug;
    oldSingleService.showing = showing;

    if (files.photo) {
      const file = bucket.file('products/' + oldSingleService.photoName);
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
      oldSingleService.photo = downloadURL;
      oldSingleService.photoName = files.photo.name;
    }
    let result;
    try {
      result = await oldSingleService.save();
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        error: errorHandler(error),
      });
    }
    res.json(result);
  });
};
