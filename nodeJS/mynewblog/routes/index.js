var express = require('express');
var router = express.Router();
//var welcome = require('../controllers/welcome');
var user = require('../controllers/user');//引进这个控制器




/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {user: req.session.loginUser});
});
router.get('/login', user.login);
router.get('/reg', user.reg);
router.post('/checkLogin',user.checkLogin);
router.post('/regist', user.regist);

module.exports = router;
