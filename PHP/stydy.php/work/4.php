<?php
$arr = [];
$result = '';
if(isset($_POST['submit'])){
    $title = $_POST['title'];
    $content = $_POST['content'];
    $date = $_POST['date'];
    $arr[] = $title;
    $arr[] =$content;
    $arr[] = $date;
    $result = implode(',',$arr);
    echo "<script>alert('".$result."')</script>";
};

?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<form action="" method="post">
    新闻标题：<input type="text" name="title">
    <br>
    新闻内容：<input type="text" name="content">
    <br>
    新闻日期：<input type="text" name="date">
    <br>
    <input type="submit"name="submit" >
</form>
</body>
</html>
