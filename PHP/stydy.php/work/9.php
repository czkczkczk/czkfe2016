<?php
    $arr = array('tom'=>100,'jack'=>60,'czk'=>120);
    if(isset($_POST['submit'])){
        $name = $_POST['name'];
        if(array_key_exists($name,$arr)){
            echo "<script>alert('".$name."成绩是".$arr[$name]."')</script>";
        }else{
          echo  "<script>alert('没有".$name."的成绩')</script>";
        }
    };
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>9</title>
</head>
<body>
<form action="" method="post">
    <h3>请输入需要查询的姓名：</h3>
    姓名：<input type="text" name="name">
    <br>
    <input type="submit" name="submit">
</form>

</body>
</html>
