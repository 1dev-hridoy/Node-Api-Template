// app.js
const express = require('express');
const app = express();
const { setupServer } = require('./config/server');
const helloRoutes = require('./apis/hello');
const greetRoutes = require('./apis/greet');

// Middleware for parsing incoming JSON requests
app.use(express.json());

// Use the routes for each API
app.use('/api/hello', helloRoutes);
app.use('/api/greet', greetRoutes);

// Set up the server
setupServer(app);

module.exports = app;
