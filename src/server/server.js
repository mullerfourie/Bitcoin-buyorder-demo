import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';

const port = process.env.PORT || 3000;
const app = express();
const publicPath = express.static(path.join(__dirname, '../')); // refers to my /build root folder
const indexPath = path.join(__dirname, '../index.html');
const MONGO_URL = 'mongodb://localhost:27017';
let database;

app.use(publicPath);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// set up connection pool
MongoClient.connect(MONGO_URL, (error, db) => {
  if (error) throw error;

  database = db.db('testDatabase');
  app.listen(port, (error) => {
    if (error) {
      console.log(error); // Log errors
    }
    console.log(`listening at http://localhost:${port}`);
  });
});

app.get('/', (req, res) => {
  res.sendFile(indexPath);
});

app.post('/buy-order', (req, res) => { // adds a new buy order TODO: needs security
  database.collection('buyorders').insertOne(req.body, (err) => {
    if (err) {
      res.sendStatus(500); // internal server error
    }
    res.redirect('/');
  });
});

app.get('/get-orders', (req, res) => {
  database.collection('buyorders').find({}).toArray(function(err, docs) {
    if (err) {
      res.sendStatus(500); // internal server error
    }
    res.json(docs);
  });
});

export default app;