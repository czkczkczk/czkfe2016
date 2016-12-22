/**
 * Created by Administrator on 2016/12/18 0018.
 */
var db = require('./db')
exports.queryAllTypes = function(userId,callback){
    var sql = 'select * from t_blog_type where user_id=?';
    db.query(sql,[userId],callback)
};
exports.saveType = function(typeName,userId,callback){
    var sql = 'insert into t_blog_type(type_name,user_id) values(?,?)';
    db.query(sql,[typeName,userId],callback)
};

exports.saveBlog = function (title, content, typeId, userId, callback) {
    var sql = 'insert into t_blog(title, content, type_id, user_id) values(?,?,?,?)';
    db.query(sql, [title, content, typeId, userId], callback);
};


exports.queryBlogs = function(userId,callback){
    var sql = 'select blog.*, type.type_name from t_blog blog, t_blog_type type where blog.type_id=type.type_id and blog.user_id=?';
        db.query(sql,[userId],callback)
};

exports.deleteBlogs = function(blogIds,callback){
    var sql = 'delete from t_blog where blog_id in ('+blogIds+')';
    db.query(sql,[],callback);
};