// 引入 mongose
// 连接 MongoDB
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/mydb')

// 持久化
const db = mongoose.connection

// 监听事件
db.on('error', console.error.bind(console, 'conneciton error:'))
db.once('open', function() {
    console.log('yay')
})