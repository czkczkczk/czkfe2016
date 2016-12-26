<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/12/23 0023
 * Time: 21:41
 */
$id = $_GET['user_id'];
$pdo = new PDO('mysql:host=localhost;dbname=myblog','root','');

$sql = "delete from t_user where user_id = $id";

$res = $pdo->exec($sql);
if($res >=1){
    header("location:userList.php");
}