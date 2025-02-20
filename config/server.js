// config/server.js
const port = process.env.PORT || 3000;

// Function to set up the server
const setupServer = (app) => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
};

module.exports = { setupServer };
