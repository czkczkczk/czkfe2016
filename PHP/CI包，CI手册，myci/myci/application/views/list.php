<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>list</title>
    <base href="<?php echo site_url();?>">
</head>
<body>
<table border="2">
    <tr>
        <th>id</th>
        <th>用户名</th>
        <th>密码</th>
        <th>修改</th>
        <th>删除</th>
    </tr>
    <?php
    foreach($list as $user){
        echo "<tr>";
        echo"<td>".$user->user_id."</td>";
        echo"<td>".$user->username."</td>";
        echo"<td>".$user->password."</td>";
        echo"<td><a href='user/change?user_id=$user->user_id'>修改</a></td>";
        echo"<td><a href='user/del?user_id=$user->user_id'>删除</a></td>";
        echo "</tr>";

    }
    ?>
</table>
</body>
</html>