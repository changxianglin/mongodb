const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost/test'
mongoose.connect(DB_URL, {
    useMongoClient: true
},
    function(err) {
    if(err) {
        console.log('err')
    } else {
        console.log('success')
    }
})

// 定时断开
setTimeout(function() {
    mongoose.disconnect(function() {
        console.log('disconnect')
    })
}, 2000)