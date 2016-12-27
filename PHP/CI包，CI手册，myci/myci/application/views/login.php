<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css">
    <base href="<?php echo site_url();?>">
</head>
<body>
<!--    <img src="images/1.jpg" alt="">-->
    <h1>用户登陆</h1>
    <form action="user/login" method="post">
        用户名: <input type="text" name="username"><br>
        密码: <input type="password" name="password"><br>
        <input type="submit" value="登录" name="login">
        <input type="submit" value="注册" name="regist">
    </form>
</body>
</html>