const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    slug: {
      type: String,
      index: true,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: 2000,
    },
    mtitle: {
      type: String,
    },
    mdesc: {
      type: String,
    },
    price: {
      type: Number,
      trim: true,
      required: true,
      maxlength: 32,
    },
    // sửa reference to cateogy schema
    categories: [{ type: ObjectId, ref: 'Category', require: true }],

    quantity: {
      type: Number,
    },
    sold: {
      type: Number,
      default: 0,
    },
    photo: {
      type: String,
      required: false,
      maxlength: 2000,
    },
    photoName: {
      type: String,
      required: false,
      maxlength: 2000,
    },
    shipping: {
      require: false,
      type: Boolean,
    },
    showing: {
      type: Boolean,
      default: false,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
