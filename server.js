const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path'); // add this line to import the path module

const config = require('./config/config');
const routes = require('./routes/index');

const app = express();

app.set('config', config);

app.use(morgan('tiny'));
app.use(cors());
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
app.use(express.json());

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
