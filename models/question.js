const mongoose = require('mongoose');
const validator = require('validator');

const QuestionSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please provide a name.'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Please provide a last name.'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide an email.'],
    trim: true,
    lowercase: true,
    unique: false,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid');
      }
    },
  },
  message: {
    type: String,
    required: [true, 'Please provide a message/question.'],
    trim: true,
  },
});

const Question =
  mongoose.models.Question ||
  mongoose.model('Question', QuestionSchema, 'Questions');
module.exports = Question;
