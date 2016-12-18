/**
 * Created by Administrator on 2016/12/18 0018.
 */
//针对用户的业务逻辑，例如登陆，注册
var userModel = require('../models/userModel');
exports.login = function(req, res){
    res.render('login');
};
exports.reg = function(req, res){
    res.render('reg');
};
exports.checkLogin = function(req, res){
    //1.接收数据
    var username = req.body.uname;
    var password = req.body.pwd;
    //2.数据验证
    //...
    //3.连接数据库
    userModel.queryByNameAndPwd(username,password,function(rows){
        if(rows.length>0){//判断这个rows的长度是否为0，如果不为0，说明这个数组有东西，就是查到了
            res.send('welcome');
        }else{
            res.render('login')
        }
    });

};