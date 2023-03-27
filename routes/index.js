// Import necessary modules
const axios = require('axios');
const express = require('express');

// Create a router instance
const router = express.Router();

// Define a route for the `/search` endpoint
router.get('/api/search', async (req, res) => {
  // Extract query parameters from the request object
  const { term, media } = req.query;

  // Get the iTunes API URL from the app configuration
  const { itunesApiUrl } = req.app.get('config');

  try {
    // Make a GET request to the iTunes Search API with the provided parameters
    const response = await axios.get(`${itunesApiUrl}?term=${term}&media=${media}`);

    // Send the response data back to the client as JSON
    res.json(response.data);
  } catch (error) {
    // Handle errors and send an appropriate error response
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Export the router instance
module.exports = router;
