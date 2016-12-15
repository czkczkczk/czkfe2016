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
  var uname = req.body.username;//req.body.username����post���д��
  if(uname == 'zxy'){
    res.render('index',{ title: 'Express',username:uname})//����д������Ҫ����õĲ���
  }
});

//regist
router.get('/regist',function(req,res){
  res.render('regist')//render��Ⱦ������ ������ejs�ļ�����
});
router.get('/checkUser',function(req,res){//checkUser���൱�ڡ���ʱ������һ����ҳ���ǲ�����ת
  var name = req.query.username;//req.query.username����get���д��
  if(name == 'zxy'){
    res.send('fail');
  }else if(name != 'zxy'&&name != ''){
    res.send('success')
  }
});

module.exports = router;
