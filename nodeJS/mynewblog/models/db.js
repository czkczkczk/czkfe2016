/**
 * Created by Administrator on 2016/12/18 0018.
 */
var mysql = require('mysql');
var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'myblog'
});

exports.query = function (sql,param,callback) {
//param����㴫��һ������
// param����userModel.js�� db.query(sql, [username, password], callback)��[username, password];
    pool.getConnection(function(err, connection) {
        // Use the connection
        connection.query(sql,param,function(err, rows) {
            if(err){
                throw  err;
            }
            callback && callback(rows);
            connection.release();
        });
    });
};

