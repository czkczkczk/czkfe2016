/**
 * Created by Administrator on 2016/12/18 0018.
 */
//针对用户表的增删改查的，对用户的操作,model永远是纯净的数据库操作
var db = require('./db');
//exports.queryByNameAndPwd = function (username,password,callback) {//顾名思义，根据名字和密码，所以需要两个参数
//    //3.连接数据库
//    connection.connect();//先做一个链接
//    //写一个查询语句
//    var sql = "select * from t_user where username='"+username+"' and password='"+password+"'";
//   //做一个查询
//    connection.query('sql',function(err,rows){//rows代表查询结果，rows查询结果集
//        if (err) throw err;
//        callback(rows);
//
//        connection.end();
//    });
//};
exports.queryByNamePwd = function (username, password, callback) {
    var sql = "select * from t_user where username=? and password=?";
    db.query(sql, [username, password], callback);
};

//exports.queryByEmail = function (email, callback) {
//    var sql = "select * from t_user where email=?";
//    db.query(sql, [email], callback);
//};
exports.save = function (username, password, email, callback) {
    var sql = 'insert into t_user(username, password, email) values(?,?,?)';
    db.query(sql, [username, password, email], callback);
};