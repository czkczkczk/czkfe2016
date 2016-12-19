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
    //userModel.queryByNameAndPwd(username,password,function(rows){
    //    //console.log(rows);
    //    if(rows.length>0){//判断这个rows的长度是否为0，如果不为0，说明这个数组有东西，就是查到了
    //        var user = rows[0];
    //        req.session.loginUser = user;
    //        res.redirect('/');
    //    }else{
    //        res.redirect('login')
    //    }
    //});
    userModel.queryByNamePwd(username, password, function (rows) {
        console.log(rows); //row是数据库中每一行数据，rows就是数组
        //rows数组里有对象:json,用js来表示数据结构
        // [ RowDataPacket {
        //     user_id: 5,
        //    username: 'zxy',
        //    password: 'zxyzxy',
        //    tell: null,
        //    email: '',
        //    create_time: null } ]
        if(rows.length > 0){
            var user = rows[0];
            req.session.loginUser = user;
            //用rows[0]里获取的值赋值给session，在session里存起来，在routes里index.js能够用这个参数
            res.redirect('/');
            // redirect是重新定向，只有一个参数，这个参数是路径
            //这里用redirect重新定向是为了登陆成功之后，可以跳转到原来的跟路径界面

         //res.render('index', {uname: username});
            //如果用这个render方法，会跳转到checkLogin


            //res.render('index', {uname: username});
        }else{
            res.redirect('/login');  //这里写的是页面路径
            //res.render('/login');  //这里写的是页面的名字
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
    userModel.save(name, pwd, email, function (rows) {
        console.log(rows);
//此时的rows发生了变化，因为增删改查所以参数也会不同
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