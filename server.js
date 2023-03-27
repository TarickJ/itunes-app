// Import necessary modules
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path'); // add this line to import the path module

// Import configuration and routes
const config = require('./config/config');
const routes = require('./routes/index');

// Create an instance of the Express application
const app = express();

// Set the app configuration
app.set('config', config);

// Use middleware to log HTTP requests
app.use(morgan('tiny'));

// Use middleware to allow cross-origin resource sharing
app.use(cors());

// Use middleware to set security-related HTTP headers
app.use(helmet({
  contentSecurityPolicy: false,
  frameguard: {
    action: 'deny'
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true
  },
  noSniff: true,
  xssFilter: true
}));

// Use middleware to parse request bodies as JSON
app.use(express.json());

// Define your API routes here
app.use('/api', routes);

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'frontend/build')));

// Catch-all route handler to serve the React app's index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build/index.html'));
});

app.listen(config.port, () => {
  console.log(`Server started on port ${config.port}`);
});
