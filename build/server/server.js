'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongodb = require('mongodb');

var _mongodb2 = _interopRequireDefault(_mongodb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MONGO_URL = 'mongodb://localhost:27017';
var port = process.env.PORT || 3000;
var app = (0, _express2.default)();

var publicPath = _express2.default.static(_path2.default.join(__dirname, '../')); // refers to my /build root folder
var indexPath = _path2.default.join(__dirname, '../index.html');

app.use(publicPath);
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());

app.listen(port, function (error) {
  if (error) {
    console.log(error); // Log errors
  }
  console.log('listening at http://localhost:' + port);
});

app.get('/', function (req, res) {
  res.sendFile(indexPath);
});

app.post('/buy-order', function (req, res) {
  // adds a new buy order TODO: needs security
  _mongodb2.default.MongoClient.connect(MONGO_URL, function (error, db) {
    if (error) throw error;

    var database = db.db('testDatabase');
    database.collection('buyorders').insertOne(req.body, function (err) {
      if (err) {
        res.sendStatus(500); // internal server error
      }
      res.redirect('/');
    });
  });
});

app.get('/get-orders', function (req, res) {
  _mongodb2.default.MongoClient.connect(MONGO_URL, function (error, db) {
    if (error) throw error;

    var database = db.db('testDatabase');
    // dump all the documents -> not good in the long run
    database.collection('buyorders').find({}).toArray(function (err, docs) {
      if (err) {
        res.sendStatus(500); // internal server error
      }
      res.json(docs);
    });
  });
});

exports.default = app;