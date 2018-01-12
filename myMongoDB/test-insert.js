const User = require('./user.js')

function insert() {
    var user = new User({
        username: 'zhangsan',
        userpwd: 'abcd',
        userage: 25,
        logindate: new Date()
    })
    user.save(function (err, res) {
        if(err) {
            console.log('Error:' + err)
        } else {
            console.log('Res:' + res)
        }
    })
}

insert()