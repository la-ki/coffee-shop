const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  category: {
    type: String,
    required: [true, 'Please provide a category.'],
    maxlength: 100,
    trim: true,
  },
  name: {
    type: String,
    required: [true, 'Please provide a name.'],
    maxlength: 100,
    trim: true,
  },
  image: {
    type: String,
    required: [true, 'Please provide an image.'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a description.'],
    trim: true,
  },
  place: {
    type: String,
    trim: true,
  },
  people: {
    type: String,
    trim: true,
  },
  process: {
    type: String,
    trim: true,
  },
  pairing: {
    type: String,
    trim: true,
  },
  available: {
    type: Boolean,
    default: true,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  price: {
    type: Number,
    required: [true, 'Please provide a price.'],
    validate(value) {
      if (value < 0) {
        throw new Error('Price must be a postive number');
      }
    },
  },
  customID: {
    type: String,
    required: [true, 'Please provide a custom id.'],
    unique: [true, 'Custom id must be unique'],
  },
  stripeID: {
    type: String,
    required: [true, 'Please provide a stripe id.'],
    unique: [true, 'Stripe id must be unique'],
  },
});

const Product =
  mongoose.models.Product || mongoose.model('Product', ProductSchema);

module.exports = Product;
