// 引入 mongoose
const mongoose = require('mongoose')
const DB_URL =  'mongodb://localhost:27017/mydb'

// 连接
mongoose.connect(DB_URL)

// 连接成功
mongoose.connection.on('connected', function() {
    console.log('mongoose connection open to ' + DB_URL)
})

// 连接异常
mongoose.connection.on('error', function(err) {
    console.log('mongoose connection error:' + err)
})

// 连接断开
mongoose.connection.on('disconnected', function() {
    console.log('mongoose connection disconnected')
})

// 到处对象
module.exports = mongoose
