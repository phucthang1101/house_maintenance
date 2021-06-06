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
    slogan:{
      type: String,
      trim: true,
      required: true,
      maxlength: 200,
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
    overviewTitle:{
      type: String,
      trim: true,
      required: true,
      maxlength: 2000,
    },
    overviewDesc: {
      type: {},

      required: true,
      min: 20,
      max: 2000000,
    },
    svgIcon:{
      type: String,
      trim: true,
      required: true,
    
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
    singleServices: [{ type: ObjectId, ref: 'SingleService', require: true }],
    showing: {
      type: Boolean,
      default: false,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
