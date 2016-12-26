<?php
$arr = [];
do{
    $a = mt_rand(0,9);
    $arr[] = $a;
    $arr = array_unique($arr);
}while(count($arr)!=5);
foreach($arr as $value){
    echo $value." ";//空字符串没别的用处就是把随机数分开个间隙

};

?>

