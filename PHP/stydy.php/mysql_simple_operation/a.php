<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/12/25 0025
 * Time: 22:54
 */
$id=$_POST["user_id"];
echo $id;
$newPwd=$_POST["newPassWord"];

$pdo = new PDO("mysql:host=localhost;dbname=myblog","root","");
$sql = "update t_user set password ='$newPwd' where user_id = $id";
$res = $pdo->exec($sql);

    if($res>0){
        header("location:userList.php");
    };