<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/12/25 0025
 * Time: 22:45
 */
$id = $_GET['user_id'];
$pdo = new PDO('mysql:host=localhost;dbname=myblog','root','');
$sql = "select user_id from t_user where user_id = $id";
$result = $pdo->query($sql);
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<form action="a.php" method="post">
    <input type="text" name="user_id" value="<?php echo $id; ?>"><!-- 获取你修改的数据的user_id-->
    <!--type="hidden"-->
    <input type="password" name="newPassWord ">
    <input type="submit">
</form>

</body>
</html>
