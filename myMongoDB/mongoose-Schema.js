const mongoose = require('mongoose')
const Schema = mongoose.Schema

var mySchema = new Schema({
    title: String,
    author: String,
    body: String,
    comments: [{body: String, date: Date}],
    date: {type: Date, default: Date.now()},
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
})

// 导出

// module.exports =