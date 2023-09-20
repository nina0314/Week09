const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const cors = require('cors');
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');
const ObjectId = require('mongodb').ObjectId;

app.use(cors());
app.use(bodyParser.json());
const url = "mongodb://localhost:27017/";
const uri = "mongodb://127.0.0.1:27017";

const client = new MongoClient(uri);

async function main ()
{
    try {
        await client.connect();
        const dbName = "mydb";
        const db = client.db(dbName);
        console.log('Connected to MongoDB successfully!');
    
        //Drop collection
        db.collection("products").drop();
    
        //Import module with correct relative path 
        require('../App/add.js') (db, app);
        require('../App/remove.js') (db, app, ObjectId);
        require('../App/update.js') (db, app, ObjectId);
        require('../App/read.js') (db, app, ObjectId);
        require('../App/create.js') (db, app);
        require('./listen.js')(http,PORT);

    }
    catch(e){
        console.log(e);
    }       


}main().catch(console.error);

