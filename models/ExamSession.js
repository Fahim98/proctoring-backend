// models/ExamSession.js
const mongoose = require('mongoose');

const examSessionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User', // Links this record to the User model
  },
  score: {
    type: Number,
    required: true,
    default: 0,
  },
  totalQuestions: {
    type: Number,
    required: true,
  },
  warnings: {
    type: Number,
    required: true,
    default: 0, // Tracks tab-switches, minimizing, etc.
  },
  isCompleted: {
    type: Boolean,
    default: false,
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('ExamSession', examSessionSchema);