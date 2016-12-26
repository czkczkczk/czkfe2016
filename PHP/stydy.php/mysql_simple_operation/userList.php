<?php

$pdo = new PDO('mysql:host=localhost;dbname=myblog','root','');
$sql = "select * from t_user";
$result = $pdo->query($sql);

//
//$conn = mysql_connect('localhost','root','');
//mysql_select_db('myblog',$conn);
//
//
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <table>
        <tr>
            <td>用户名</td>
            <td>密码</td>
            <td>删除</td>
            <td>修改</td>

        </tr>
        <?php
        foreach($result as $row){
            echo "<tr>";
            echo "<td>".$row['username']."</td>";
            echo "<td>".$row['password']."</td>";
            echo "<td><a href='userDel.php?user_id=".$row['user_id']."'/>删除</a></td>";
            echo "<td><a href='userRevise.php?user_id=".$row['user_id']."'/>修改</a></td>";
            echo "</tr>";
        }
        ?>

    </table>
</body>
</html>
