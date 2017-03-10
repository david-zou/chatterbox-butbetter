const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// needed for index.html
app.use(express.static(path.join(__dirname, '../public')));

// needed for the react bundles
app.use('/bundles', express.static(path.join(__dirname, '../bundles')));

app.get('/', function(req, res, next) {
  if (!req.body) {
    res.sendStatus(400);
  } else {
    res.send('Hello World!');
  }
});

app.listen(PORT, function() {
  console.log('Server connection established at port', PORT);
});