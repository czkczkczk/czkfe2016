<?php
$name1 = '';
$name2 = '';
$name3 = '';
    if(isset($_POST['submit'])){
        $name1 = $_POST['name1'];
        $name2 = $_POST['name2'];
        $name3 = $_POST['name3'];
        if($name1!=$name2&&$name1!=$name3&&$name2!=$name3){
            echo "<script>alert('分组成功')</script>";
        }else{
            echo "<script>alert('分组姓名有重复 请重新输入')</script>";
        };
    };

?>
<?php
//$arr = [];
//if(isset($_POST['submit'])){
//    $name1 = $_POST['name1'];
//    $name2 = $_POST['name2'];
//    $name3 = $_POST['name3'];
//    $arr[] = $name1;
//    $arr[] = $name2;
//    $arr[] = $name3;
//
//    $arr = array_unique($arr);
//    if(count($arr)!=3){
//        echo "<script>alert('分组姓名有重复 请重新输入');</script>";
//    }else{
//        echo "<script>alert('分组成功');</script>";
//    }
//
//}
//?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>8</title>
</head>
<body>
<form action="" method="post">
    <tr>
        <td>分组姓名1:</td>
        <td>
            <input type="text" name="name1" value="<?php echo $name1 ?>">
        </td>
    </tr>
    <br>
    <tr>
        <td>分组姓名2:</td>
        <td>
            <input type="text" name="name2"value="<?php echo $name2 ?>">
        </td>
    </tr>
    <br>
    <tr>
        <td>分组姓名3:</td>
        <td>
            <input type="text" name="name3" value="<?php echo $name3 ?>">
        </td>
    </tr>
    <br>
    <input type="submit" name="submit">
</form>
</body>
</html>
