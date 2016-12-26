<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/12/23 0023
 * Time: 20:12
 */
$name = $_POST['name'];
$pwd = $_POST['pwd'];

$pdo = new PDO('mysql:host=localhost;dbname=myblog','root','');

$sql = "insert into t_user(username,password) values('$name','$pwd')";
//$conn = mysql_connect('localhost','root','');
//mysql_select_db('test',$conn);老写法

$res = $pdo->exec($sql);//执行sql语句，用的是 -> exec,是js里的.
echo $res;
if($res>=1){
    header("location:userList.php");
}

//$res相当于node里的mysql_affected_rows()

//mysql_query($sql);
//if(mysql_affected_rows() >= 1){
//老写法
//}

