var express = require('express');
var router = express.Router();

// 监听请求
router.use(function timeLog(req, res, next) {
    console.log('time: ' +  new Date())
    next()
})
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/user', function(req, res) {
  res.send('Got a POST request')
})

router.put('/user', function(req, res) {
  res.send('Got a PUT request at /user')
})

router.delete('/user', function(req, res) {
  res.send('Got a DELETE request at /user')
})

module.exports = router;
