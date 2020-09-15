const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32
    
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
  },
  { timestamps: true }
);


module.exports = mongoose.model('Category', categorySchema);
