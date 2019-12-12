const express = require('express');
const connectDB = require('./config/db');
const morgan = require('morgan');
const authRoutes = require('./routes/auth');
const contactRoutes = require('./routes/contacts');
const userRoutes = require('./routes/users');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

// connect Database
connectDB();

// define routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/contacts', contactRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`app running on port ${PORT} `);
});

module.exports.app = app;
