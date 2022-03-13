const app = require("./app");
require("dotenv").config();
const mongoose = require('mongoose');

const server = app.listen(3000, function () {
  console.log(`express is running on port ${server.address().port}`);
});
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology : true
});

mongoose.connection
    .on('open',() => {
    console.log('Mongoose connection open');
  })
    .on('error', (err) => {
      console.log('Connection error: ${err.message}');
    });

require('./models/Registration')
const app = require('./app');

const server = app.listen(3000, () => {
  console.log(`Express is running on port ${server.address().port}`);
});