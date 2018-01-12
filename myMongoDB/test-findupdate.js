var User = require('./user.js')

function findByIdAndUpdate() {
    var id = '5a5852b00d5f3632889235ad'
    var updatestr = {'userpwd': 'abcd'}

    User.findByIdAndUpdate(id, updatestr, function(err, res) {
        if (err) {
            console.log('Error: ' + err)
        } else {
            console.log('Res:' + res)
        }
    })
}

findByIdAndUpdate()