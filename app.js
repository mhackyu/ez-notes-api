const express = require('express');
const bodyParser = require('body-parser');

// Create express app
const app = express();

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuring the database
const dbConfig = require('./src/config/db.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url)
  .then(() => {
    console.log('Connected to database');
  }).catch((err) => {
    // console.log(err.stack);
    console.log('Could not connect to the database. Exiting now..');
    // process.exit();
  });

// home route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to EzNotes Application. Take notes quickly. Organize and keep track of all your notes' });
});

// require routes
require('./src/routes/note.routes')(app);

// listen for requests
app.listen(process.env.PORT || 5000, () => {
  console.log('Server is listening on port 4000');
});
