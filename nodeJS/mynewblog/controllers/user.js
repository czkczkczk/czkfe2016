/**
 * Created by Administrator on 2016/12/18 0018.
 */
//����û���ҵ���߼��������½��ע��
var userModel = require('../models/userModel');

exports.login = function(req, res){
    res.render('login');
};
//logout,����˳�����
exports.logout = function(req,res){
    req.session.loginUser = null;
    //�ڵ���˳�֮�����һ�ε�½��õ��û�session��������������û�ر�ʱ���ڴ���ҳ�û��������ڡ�
    res.redirect('/login');//exports.login(req,res);
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
    //userModel.queryByNameAndPwd(username,password,function(rows){
    //    //console.log(rows);
    //    if(rows.length>0){//�ж����rows�ĳ����Ƿ�Ϊ0�������Ϊ0��˵����������ж��������ǲ鵽��
    //        var user = rows[0];
    //        req.session.loginUser = user;
    //        res.redirect('/');
    //    }else{
    //        res.redirect('login')
    //    }
    //});
    userModel.queryByNamePwd(username, password, function (rows) {
        console.log(rows); //row�����ݿ���ÿһ�����ݣ�rows��������
        //rows�������ж���:json,��js����ʾ���ݽṹ
        // [ RowDataPacket {
        //     user_id: 5,
        //    username: 'zxy',
        //    password: 'zxyzxy',
        //    tell: null,
        //    email: '',
        //    create_time: null } ]
        if(rows.length > 0){
            var user = rows[0];
            req.session.loginUser = user;//��req.session�´����Զ������ԣ�session����һ���Ự�����������ݵģ��ر��������û
            //��rows[0]���ȡ��ֵ��ֵ��session����session�����������routes��index.js�ܹ����������
            res.redirect('/adminIndex');
            // redirect�����¶���ֻ��һ�����������������·�����ض���:�൱���ڷ������˷�������
            //������redirect���¶�����Ϊ�˵�½�ɹ�֮�󣬿�����ת��adminIndex����

         //res.render('index', {uname: username});
            //��������render����������ת��checkLogin


            //res.render('index', {uname: username});
        }else{
            res.redirect('/login');  //����д����ҳ��·��
            //res.render('/login');  //����д����ҳ�������
        }
    });


};
exports.regist = function(req,res){
    var name = req.body.name;
    var email = req.body.email;
    var pwd = req.body.pwd;
    var pwd2 = req.body.pwd2;

    if(pwd != pwd2){
        res.render('reg');
    }
    userModel.save(name, pwd, email, function (rows) {//function�еĲ����ǲ�ѯ��������Ǹ�����
        console.log(rows);
//��ʱ��rows�����˱仯����Ϊ��ɾ�Ĳ����Բ���Ҳ�᲻ͬ
//        OkPacket {
//            fieldCount: 0,
//                affectedRows: 1,
//                insertId: 7,
//                serverStatus: 2,
//                warningCount: 0,
//                message: '',
//                protocol41: true,
//                changedRows: 0 }

        if(rows.affectedRows > 0){
            res.redirect('/login');
        }else{
            res.send('fail');
        }
    });
};


