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
const cors = require('cors');
const router = require('./routes/router');
const port = process.env.PORT || 5000;

mongoose.connect(mongoDbUri, {useNewUrlParser: true})

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
router(app);

server.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;