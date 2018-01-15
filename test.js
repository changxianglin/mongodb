// 引入数据库
// 链接数据库
// 创建数据库
const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/firstDB'

MongoClient.connect(url, function(err, db) {
    if(err) throw err
    console.log('数据库已创建')
    db.close()
})