const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const questionRoutes = require('./routes/questionRoutes');

// Load environment variables from .env file
dotenv.config();

// Connect to the MongoDB database
connectDB();

// Initialize the Express application
const app = express();

// --- MIDDLEWARE ---
// 1. Allow Cross-Origin requests (so your React app can talk to this API)
app.use(cors());

// 2. Parse incoming JSON payloads (CRITICAL: Must be before routes)
app.use(express.json()); 


// --- ROUTES ---
app.use('/api/auth', authRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/questions', questionRoutes);


// --- FALLBACK/TEST ROUTE ---
// A simple route to verify the main server URL is responsive
app.get('/', (req, res) => {
  res.send('Proctoring API is running...');
});


// --- SERVER STARTUP ---
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in development mode on port ${PORT}`);
});