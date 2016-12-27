<?php
    session_start();
    $result = [];
    if(isset($_SESSION['user'])){
        $result = $_SESSION['user'] ;//把一个名为user的session赋值给$result

    }
//如果已经有session 了，就直接把新建好的数据存到已经存在session里，如果没有这个判断，每次都是替换session原有的数据

    if(isset($_POST['submit'])){
        $arr =[];
        $name = $_POST['name'];
        $age = $_POST['age'];
        $arr[] = $name;
        $arr[] = $age;
        $result[] = $arr;
        $_SESSION['user']=$result;//定义一个名为user的session，里面的值是$result


    };
    if(isset($_POST['del'])){
        array_pop($result);
        $_SESSION['user'] = $result;//删除之后要再存一次，如果不删除，每次删除都是上面存好的session里的最后一行，
    };
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>7</title>
</head>
<body>
<form action="" method="post">
    名称：<input type="text" name="name">
    <br>
    年龄：<input type="text" name="age">
    <br>
    <input type="submit" name="submit">
    <table>
        <tr>
            <td>编号</td>
            <td>姓名</td>
            <td>年龄</td>
        </tr>
        <?php
            foreach($result as $key=>$row){
                echo "<tr>";
                echo "<td>".($key+1)."</td>";
                echo "<td>$row[0]</td>";
                echo "<td>$row[1]</td>";
                echo "</tr>";
            }
        ?>
    </table>
    <input type="submit" name="del" value="删除">
</form>

</body>
</html>