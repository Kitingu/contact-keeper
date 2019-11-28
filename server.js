const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const contactRoutes = require('./routes/contacts');
const userRoutes = require('./routes/users');
const app = express();

// connect Database
connectDB();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.send('Hello world');
});

// define routes
app.use('api/users', userRoutes);
app.use('api/auth', authRoutes);
app.use('api/contacts', contactRoutes);

app.listen(PORT, () => {
	console.log(`app running on port ${PORT} `);
});
