<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/12/23 0023
 * Time: 14:37
 */
$name = $_POST['name'];
$pwd = $_POST['pwd'];
$err = '';
if($name == ''){
    $err .= 'xx=1&';
};
if($pwd == ''){
    $err .= 'yy=2';
}
if($err==''){
    header("location:success.php");
}else{
    header("location:test.php?$err");
}
