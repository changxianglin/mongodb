// 引入模块
const mongoose = require('mongoose')

//链接数据库
mongoose.connect('mongodb://todoapp:todoapp@ds121238.mlab.com:21238/todo')

// 创建图表
var todoSchema = new mongoose.Schema({
    item: String
})

//往数据库中存储数据
var Todo = mongoose.model('Todo', todoSchema)

Todo({item: 'Hello Everyone!'}).save(function(err, data) {
    if(err) throw err
    console.log('Item saved')
})

// curd 增删改查

Todo().delete(function(err, data) {
    if(err) throw err
    console.log('Running delete')
})

Todo().upate(function(err, data) {
    if(err) throw err
    console.log('Running update')
})

Todo().find(function(err, data) {
    if(err) throw err
    console.log('Runing find')
})

