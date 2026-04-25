// seeder.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Question = require('./models/Question');
const questions = require('./data/questions');

// Load environment variables so we have the MONGO_URI
dotenv.config();

// Connect to the database
connectDB();

const importData = async () => {
  try {
    // 1. Clear out any existing questions to prevent duplicates
    await Question.deleteMany();
    console.log('Old questions cleared...');

    // 2. Insert the dummy data
    await Question.insertMany(questions);
    console.log('New questions imported successfully! 🚀');

    // 3. Exit the process cleanly
    process.exit();
  } catch (error) {
    console.error(`Error importing data: ${error.message}`);
    process.exit(1); // Exit with failure
  }
};

// Execute the function
importData();