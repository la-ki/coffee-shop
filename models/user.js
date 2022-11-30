import {
  hashPassword,
  verifyPassword,
} from '../utils/helpers/hashPasswordHelpers';

const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Please provide a name.'],
      maxlength: [60, 'Name cannot be more than 60 characters'],
      trim: true,
    },
    username: {
      type: String,
      required: [true, 'Please provide an username.'],
      unique: [true, 'Username must be unique.'],
      maxlength: [60, 'Name cannot be more than 60 characters'],
      trim: true,
    },
    email: {
      type: String,
      unique: [true, 'Email must be unique.'],
      required: [true, 'Please provide an email.'],
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Email is invalid');
        }
      },
    },
    password: {
      type: String,
      required: [true, 'Please provide a password.'],
      minlength: 7,
      trim: true,
      validate(value) {
        if (value.toLowerCase().includes('password')) {
          throw new Error('Password cannot contain "password"');
        }
      },
    },
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
  },
  {
    toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
    toObject: { virtuals: true }, // So `console.log()` and other functions that use `toObject()` include virtuals
  }
);

UserSchema.virtual('orders', {
  ref: 'Order',
  localField: '_id',
  foreignField: 'owner',
});

UserSchema.statics.findByCredentials = async (username, password) => {
  const user = await User.findOne({ username });

  if (!user) {
    throw new Error('Unable to login');
  }

  const isMatch = await verifyPassword(password, user.password);

  if (!isMatch) {
    throw new Error('Unable to login');
  }

  const userData = {
    fullName: user.fullName,
    email: user.email,
    address: user.address,
    address2: user.address2,
    city: user.city,
    country: user.country,
    postcode: user.postcode,
    orders: user.orders,
    _id: user._id,
  };
  return userData;
};

UserSchema.pre('save', async function (next) {
  const user = this;

  if (user.isModified('password')) {
    user.password = await hashPassword(user.password);
  }

  next();
});

const User = mongoose.models.User || mongoose.model('User', UserSchema, 'User');
module.exports = User;
