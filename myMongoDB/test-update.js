const User = require('./user.js')

function update() {
    var wherestr = {username: 'Tracy Mcgrady'}
    var updatestr = {userpwd: 'zzzz'}

    User.update(wherestr, updatestr, function(err, res) {
        if (err) {
            console.log('Error:' + err)
        } else {
            console.log('Res:' + res)
        }
    })
}

update()