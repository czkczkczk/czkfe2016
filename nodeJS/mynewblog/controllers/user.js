/**
 * Created by Administrator on 2016/12/18 0018.
 */
//����û���ҵ���߼��������½��ע��
var userModel = require('../models/userModel');
exports.login = function(req, res){
    res.render('login');
};
exports.reg = function(req, res){
    res.render('reg');
};
exports.checkLogin = function(req, res){
    //1.��������
    var username = req.body.uname;
    var password = req.body.pwd;
    //2.������֤
    //...
    //3.�������ݿ�
    userModel.queryByNameAndPwd(username,password,function(rows){
        if(rows.length>0){//�ж����rows�ĳ����Ƿ�Ϊ0�������Ϊ0��˵����������ж��������ǲ鵽��
            res.send('welcome');
        }else{
            res.render('login')
        }
    });

};