"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var cors = require('cors');

var morgan = require('morgan');

var app = express();
app.use(morgan('combined')); // app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({
//     extended: true
// }))

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(cors());
app.post('/register', function (req, res) {
  res.send({
    message: "Hello ".concat(req.body.email, " your user was registered! Have fun!")
  });
});
app.listen(process.env.PORT || 8081);