var express = require('express');
var router = express.Router();
//var welcome = require('../controllers/welcome');
var user = require('../controllers/user');//引进这个控制器
var admin = require('../controllers/admin');




/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {user: req.session.loginUser});
});
router.get('/login', user.login);

router.get('/logout',user.logout);

router.get('/reg', user.reg);

router.post('/checkLogin',user.checkLogin);

router.post('/regist', user.regist);

router.get('/adminIndex',admin.index);

router.get('/blogType',admin.blogType);
router.post('/addBlogType',admin.addBlogType);

router.get('/newBlog', admin.newBlog);
router.post('/addBlog',admin.addBlog);

router.get('/blogs',admin.blogs);
router.get('/deleteBlog',admin.deleteBlogs);


module.exports = router;
