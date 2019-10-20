<?php
# 01-先连接数据库
$db = mysqli_connect("127.0.0.1", "root", "", "dizhuang");

# 02-查询获取数据库所有的数据
$sql = "SELECT * FROM goods";

$result = mysqli_query($db, $sql);
$count = ceil(mysqli_num_rows($result) / 16);
echo '{"count":'.$count."}";
?>