const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const SingleServiceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    slug: {
      type: String,
      unique: true,
      index: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: 2000,
    },
    body: {
      // empty object mean u can all type of data
      type: {},

      required: true,
      min: 20,
      max: 2000000,
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
  
    showing: {
      type: Boolean,
      default: false,
      require: true,
    },
   
  },
  { timestamps: true }
);

module.exports = mongoose.model('SingleService', SingleServiceSchema);
