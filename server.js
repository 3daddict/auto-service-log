const dotenv = require('dotenv');
dotenv.config();
const mongoDbUri = process.env.MONGODB_URI;
const express = require("express");
const app = express();
const http = require('http');
const server = http.createServer(app);
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan  = require('morgan');
const router = require('./routes/router');
const port = process.env.PORT || 5000;

mongoose.connect(mongoDbUri, {useNewUrlParser: true})

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
router(app);
// app.use(express.static('./client/build/'));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
  });

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
  });

  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message
      }
    });
  });

server.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;