// apis/hello.js
const express = require('express');
const router = express.Router();

// Controller logic for 'hello' endpoint
const helloWorld = (req, res) => {
  res.send('Hello, World!');
};

// Define the route for 'hello' API
router.get('/', helloWorld);

module.exports = router;
