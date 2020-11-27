const {MongoClient} = require('mongodb');

var uri = 'mongodb://localhost:5000/mydb';

const client = new MongoClient(uri,{useNewUrlParser: true, useUnifiedTopology: true});

client.connect(function(err,db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
})
