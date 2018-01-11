var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://localhost:27017/";

MongoClient.connect(uri, function(err, db) {
    // Paste the following examples here
    console.log('link database')
    db.collection.insert( { x: 1 } )
    db.close();
});



