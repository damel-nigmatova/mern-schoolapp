const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors'); // for security (provides access to specific URL's)

// routes
const students = require('./routes/api/students');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/students', students);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));