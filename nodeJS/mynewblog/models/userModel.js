/**
 * Created by Administrator on 2016/12/18 0018.
 */
//����û�������ɾ�Ĳ�ģ����û��Ĳ���,model��Զ�Ǵ��������ݿ����
var db = require('./db');
//exports.queryByNameAndPwd = function (username,password,callback) {//����˼�壬�������ֺ����룬������Ҫ��������
//    //3.�������ݿ�
//    connection.connect();//����һ������
//    //дһ����ѯ���
//    var sql = "select * from t_user where username='"+username+"' and password='"+password+"'";
//   //��һ����ѯ
//    connection.query('sql',function(err,rows){//rows������ѯ�����rows��ѯ�����
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