// models/Question.js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  options: {
    type: [String], // Array of strings
    required: true,
  },
  correctAnswer: {
    type: Number, // The index of the correct option (0, 1, 2, 3)
    required: true,
  }
});

module.exports = mongoose.model('Question', questionSchema);