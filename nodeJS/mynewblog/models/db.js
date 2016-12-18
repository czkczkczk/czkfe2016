/**
 * Created by Administrator on 2016/12/18 0018.
 */
var mysql      = require('mysql');
var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'myblog'
});

exports.query = function (sql, callback) {
    pool.getConnection(function(err, connection) {
        // Use the connection
        connection.query(sql, function(err, rows) {
            if (err) throw err;
            callback(rows);
            connection.release();
        });
    });
};