const express = require('express')
const app = express()

var html = '<div> <p>欢迎光临</p> <input type="text"> <input tepe="passwored"> <button>登录</button> <button>注册</button> </div>'
var data = JSON.stringify({name: 'zhangsan'})

app.get('/', function(req, res) {
    res.end('page in first page')
})

app.get('/index', function(req, res) {
    res.end(data)
})

app.get('/first', function(req, res) {
    res.end('first page router')
})

app.get('/page', function(req, res) {
    res.end(html)
})

const server = app.listen(5000, function() {
    const host = server.address().address
    const port = server.address().port

    console.log('Example app listening at http://%s:%s/', host, port)
})
