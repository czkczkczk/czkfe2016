<?php
$result = [];
if(isset($_POST['submit'])){
    for($i=0;$i<5;$i++){
        $arr = [];
        do{
            $a = mt_rand(0,36);
            $arr[] = $a;
            $arr = array_unique($arr);
        }while(count($arr)!=7);
        $result[] = $arr;
        $str = implode(',',$arr);
    };
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
    <h1>彩票</h1>
    <input type="submit" name="submit">
</form>
<?php
 foreach($result as $key => $arr){
     //$str = implode(',',$arr);//前面写了
     echo "第".($key+1)."注：".$str."<br>";
 }
?>
</body>
</html>
