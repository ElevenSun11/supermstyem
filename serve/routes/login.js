var express = require('express');
var router = express.Router();

//引入连接数据库的模块
const connection = require('./connect')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
