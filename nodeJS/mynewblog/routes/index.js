var express = require('express');
var user = require('../controllers/user');//引进这个控制器
var router = express.Router();




/* GET home page. */
router.get('/', function(req, res) {

});
router.get('/login', user.login);
router.get('/reg', user.reg);
router.post('/checkLogin',user.checkLogin);


module.exports = router;
