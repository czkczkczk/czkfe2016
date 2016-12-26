<?php
$arr = array('02-02'=>'看电影','03-02'=>'约会','12-25'=>'吃饭看电影');
var_dump($arr);
$result = '';
    if(isset($_POST['submit'])){
        $date = $_POST['date'];
        if(isset($arr[$date])){
            $result = $arr[$date];
        }else{
            $result = '没有记录';
        };
        echo "<script>alert('".$date.'备忘'.$result."')</script>";
    };
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>2</title>
</head>
<body>
<form action=""method="post">
    你要查询的日期：<input type="text" name="date">
    <br>
    <input type="submit" value="查询" name="submit">
    <input type="reset" value="重置" name="reset">
</form>
</body>
</html>
