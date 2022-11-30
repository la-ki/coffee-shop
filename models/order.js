const mongoose = require('mongoose');
const validator = require('validator');

const OrderSchema = new mongoose.Schema(
  {
    products: [
      {
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
      },
    ],
    time: {
      type: Date,
      required: [true, 'Please provide a date.'],
      validate(value) {
        if (!validator.isDate(value)) {
          throw new Error('Not a date');
        }
      },
    },
    shippingAddress: {
      country: {
        type: String,
        required: [true, 'Please provide a country.'],
        trim: true,
      },
      city: {
        type: String,
        required: [true, 'Please provide a city.'],
        trim: true,
      },
      address: {
        type: String,
        required: [true, 'Please provide an address.'],
        trim: true,
      },
      address2: {
        type: String,
        trim: true,
      },
      postcode: {
        type: String,
        required: [true, 'Please provide a postal code.'],
      },
      email: {
        type: String,
        required: [true, 'Please provide an email.'],
      },
      fullName: {
        type: String,
        required: [true, 'Please provide a name.'],
      },
    },

    totalPrice: {
      type: Number,
      required: [true, 'Please provide a total price.'],
      validate(value) {
        if (value < 0) {
          throw new Error('Total price must be a postive number');
        }
      },
    },
    numberOfItems: {
      type: Number,
      required: [true, 'Please provide a total number of items.'],
      validate(value) {
        if (value < 0) {
          throw new Error('Number of items must be a postive number');
        }
      },
    },
    fulfilled: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, 'Please provide an owner.'],
      ref: 'User',
    },
    stripeCheckoutId: {
      type: String,
      required: [true, 'Please provide a stripe checkout id.'],
    },
  },
  {
    toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
    toObject: { virtuals: true }, // So `console.log()` and other functions that use `toObject()` include virtuals
  }
);

const Order =
  mongoose.models.Order || mongoose.model('Order', OrderSchema, 'Order');

module.exports = Order;
