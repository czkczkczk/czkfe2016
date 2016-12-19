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
//param是随便传的一个参数
// param代表userModel.js里 db.query(sql, [username, password], callback)的[username, password];
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

