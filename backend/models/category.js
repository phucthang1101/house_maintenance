const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

// By Room - By Area - By Service
const categorySchema = new mongoose.Schema(
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

    categoryDesc: {
      type: String,
      max: 1000,
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
    services: [{ type: ObjectId, ref: 'Product', require: true }],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Category', categorySchema);
