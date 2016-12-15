var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/', function(req, res) {
  res.render('index', {uname: null});
});

//login
router.get('/login',function(req,res){
  res.render('login')
});
router.post('/checkLogin',function(req,res){
  var uname = req.body.username;//req.body.username是在post里的写法
  if(uname == 'zxy'){
    res.render('index',{ title: 'Express',username:uname})//这里写的是需要定义好的参数
  }
});

//regist
router.get('/regist',function(req,res){
  res.render('regist')//render渲染，加载 后面是ejs文件的名
});
router.get('/checkUser',function(req,res){//checkUser“相当于”临时创建的一个网页但是不会跳转
  var name = req.query.username;//req.query.username是在get里的写法
  if(name == 'zxy'){
    res.send('fail');
  }else if(name != 'zxy'&&name != ''){
    res.send('success')
  }
});

module.exports = router;
