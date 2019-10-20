<?php
$db = mysqli_connect("127.0.0.1","root","","dizhuang");
$id=$_REQUEST["name"];
$sql="SELECT * FROM goods WHERE good_id = '$id'";
$result = mysqli_query($db, $sql);
$data = mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($data,true); 
 
?>