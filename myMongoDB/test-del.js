var User = require('./user.js')

function del() {
    var wherestr = {'username': 'Tracy Mcgrady'}

    User.remove(wherestr, function(err, res) {
        if (err) {
            console.log('Error:' + err)
        } else {
            console.log('Res:' + res)
        }
    })
}

del()