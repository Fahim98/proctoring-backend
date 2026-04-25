// controllers/questionController.js
const Question = require('../models/Question');

// @desc    Fetch all exam questions
// @route   GET /api/questions
// @access  Private (We will lock this down later so only logged-in users can fetch)
const getQuestions = async (req, res) => {
  try {
    // Fetch all questions, but exclude the 'correctAnswer' field for security 
    // so clients can't cheat by inspecting the network tab!
    const questions = await Question.find({}).select('-correctAnswer');
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

module.exports = { getQuestions };