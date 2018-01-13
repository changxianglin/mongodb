const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost/test'
mongoose.connect(DB_URL, {
        useMongoClient: true
    },
    function(err) {
    if (err) {
        console.log('error')
    } else {
        console.log('sucess')
    }
})

// 注意版本的升级引起的问题
// {添加 useMongoClient: true}

