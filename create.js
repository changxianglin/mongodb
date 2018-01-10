// 引入数据库
// 连接数据库
// 创建数据库
// 创建集合

const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/mydb'

MongoClient.connect(url, function(err, db) {
    if(err) throw err
    console.log('数据库已建立')
    var dbase = db.db('mybd')
    dbase.createCollection('zhangsan', function(err, res) {
        if(err) throw err
        console.log('创建集合')
        db.close()
    })
})
