const Category = require('../models/category');
const { errorHandler } = require('../helper/errHandler');
const slugify = require('slugify');
const Product = require('../models/product');
const _ = require('lodash');

exports.createCategory = (req, res) => {
  //console.log('category')
  const { name, categoryDesc } = req.body;
  let slug = slugify(name).toLowerCase();

  const category = new Category({ name, slug, categoryDesc });

  category.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json({ data });
  });
};

exports.listAllCategories = (req, res) => {
  Category.find({}).exec((err, categories) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }

    res.json(categories);
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

  
  Category.findOneAndRemove({ slug }).exec((err, result) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json({
      message: 'Category deleted !',
    });
  });
};

exports.updateCategory =  (req, res) => {
 // console.log('updateCategory');
  let oldSlug = req.params.slug.toLowerCase();
 //  console.log(oldSlug);
 
  Category.findOne({ slug: oldSlug }).exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    } else {
      const { name, categoryDesc } = req.body;
      let newSlug = slugify(name).toLowerCase();
   //   console.log('old cate: ', data);
      data.name = name;
      data.categoryDesc = categoryDesc;
      data.slug = newSlug;
    //  console.log('new cate: ', data);
      data.save((err, result) => {
        if (err) {
          return res.status(400).json({
            error: errorHandler(err),
          });
        } else {
          res.json(result);
        }
      });
    }
  });
};
