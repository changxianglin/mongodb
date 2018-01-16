var express = require('express');
var router = express.Router();

// test data JSON
var data = JSON.stringify({name: 'zhangsan'})
/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
    res.send(data)
});

module.exports = router;
