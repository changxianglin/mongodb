// 引入数据库
// 连接数据库
// 创建数据库
// 创建集合

const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/mydb'

MongoClient.connect(url, function(err, db) {
    if(err) throw err
    console.log('数据库已建立')
    var dbase = db.db('mydb')
    dbase.createCollection('runoob', function(err, res) {
        if(err) throw err
        console.log('runoob 创建集合')
        db.close()
    })
})
