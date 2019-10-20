<?php
# 01-先连接数据库
$db = mysqli_connect("127.0.0.1","root","","dizhuang");

# 获取参数
$page = ($_REQUEST["page"] -1 ) * 16;
$type = $_REQUEST["sortType"];

# 02-查询获取数据库所有的数据
if($type == 0)
{
  $sql = "SELECT * FROM goods LIMIT $page, 16";
}elseif($type == 1){
  $sql = "SELECT * FROM goods ORDER BY priceA DESC LIMIT $page, 16";
}else{
  $sql = "SELECT * FROM goods ORDER BY priceA ASC LIMIT $page, 16";
}

$result = mysqli_query($db,$sql);
# 03-把数据库中的获取所有数据转换为JSON返回
$data = mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($data,true);
?>