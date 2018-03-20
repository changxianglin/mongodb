const mongoose = require('mongoose')

mongoose.connect("mongodb://laozhang:laozhang@ds119449.mlab.com:19449/firstapp")

var todoSchema = new mongoose.Schema({
    item: String
})

//save

var Todo = mongoose.model('Todo', todoSchema)

Todo({item: 'Hello world!'}).save(function(err, data) {
    if(err) throw err
    console.log('item saved')
})

//delete use api is  remove
Todo.remove(function(err, data) {
    if(err) throw err
    console.log('running delete')
})

//update
// Todo.update(function(err, data) {
//     if(err) throw err
//     console.log('running update')
// })

//read
// Todo.find(function(err, data) {
//     if(err) throw err
//     console.log(data)
// })


