// 引入 mongoose
// 连接 MongDB
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydb');

// 连接成功
mongoose.connection.on('connected', function() {
    console.log('ok')
})

// 连接失败
mongoose.connection.on('error', function(err) {
    console.log('error' + err)
})

// 关闭连接
mongoose.connection.on('disconnection', function() {
    console.log('disconnection')
})

