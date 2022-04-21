const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Connect mongoDB
mongoose.Promise = global.Promise;

mongoose
  .connect('mongodb://localhost:27017/mydatabase')
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason);
  });

const studentAPI = require('./src/routes/student.route.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(cors());

// API
app.use('/api', studentAPI);

// Port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log(`Connected to port ${port}`);
});

// 404
app.use((req, res, next) => {
  next(() => console.log(404))
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.message);

  if (!err.statusCode) { err.statusCode = 500; }

  res.status(err.statusCode).send(err.message);
});
