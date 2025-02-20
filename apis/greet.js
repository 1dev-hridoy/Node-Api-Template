// apis/greet.js
const express = require('express');
const router = express.Router();

// Controller logic for 'greet' endpoint
const greet = (req, res) => {
  res.json({ message: 'Welcome to the Node.js API!' });
};

// Define the route for 'greet' API
router.get('/', greet);

module.exports = router;
