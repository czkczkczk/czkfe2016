<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<form action="welcome.php" method="post">
    name<input type="text" name="name">

    <?php
        if(isset( $_GET['xx'])){
            echo ' <span>错误</span>';
        }
     ?>
    <br>
    password<input type="text" name="pwd">

    <?php
        if(isset( $_GET['yy'])){
            echo ' <span>错误</span>';
        }
    ?>
    <br>
    <input type="submit" value="登陆">
</form>
</body>
</html>