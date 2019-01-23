const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const morgan  = require('morgan');
app.use(morgan('combined'));
const port = 5000;

app.use(bodyParser.json());
app.use(express.static('./client/build/'));

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
