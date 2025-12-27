const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config();
connectDB(); 

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); 

// Routes
app.use('/api/auth', require('./routes/authRoutes')); // Auth routes

// Test root route
app.get('/', (req, res) => {
  res.send('Maintenance Management System API is running');
});

// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
