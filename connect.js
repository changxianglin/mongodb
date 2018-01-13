var mongodb = require('mongodb');
mongodb.MongoClient.connect("mongodb://localhost/db1",function(err,db){
    if(!err){
        db.collection("col").insert({"a":1},function(err,result){
            if(!err){
                console.log(result);
            }
        })
    }
})

// 升级后的版本，方法变得不一致。