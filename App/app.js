
const MongoClient = require('mongodb').MongoClient;
    
const url = 'mongodb://localhost:27017';
const dbName = 'mydb';

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to the MongoDB server
client.connect(async (err) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  const db = client.db(dbName);
  const productsCollection = db.collection('products');


    // create = require('./create.js') 
    // add = require('./add.js') (db, app);
    // remove = require('./remove.js') (db, app);
    // update = require('./update.js') (dbName, productsCollection, id, newData);
    // read = require('./read.js') (dbName, productsCollection);


});