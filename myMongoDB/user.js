// 引入模块
const mongoose = require('./db.js')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {type: String},
    userpwd: {type: String},
    userage: {type: Number},
    logindate: {type: Date}
})

// 导出模块
module.exports = mongoose.model('User', UserSchema)
