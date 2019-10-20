<?php
# （1） 先获取用户提交的参数
$phone    = $_REQUEST["phone"];  
$password = $_REQUEST["password"];

# (2) 通过PHP代码来操作数据库
# 001 先连接数据库
$db=mysqli_connect("127.0.0.1","root","","jumei");

# 002 先检查当前的用户名是否已经被注册,如果已经被注册，返回错误的提示信息。
$sql = "SELECT * FROM jumei WHERE phone = '$phone'";

#执行查询语句
$result = mysqli_query($db, $sql);
$response = array("status"=>"","msg"=>"");
if(mysqli_num_rows($result) == 1)
{
    $response["status"] = "error";
    $response["msg"] = " 该手机号已经被注册！！";
    // echo json_encode($response,true);  
}else{
     /* 执行插入语句 */
    $insertSql = "INSERT INTO `jumei` (`id`,`phone`, `password` ) VALUES (NULL, '$phone', '$password')";
    $res = mysqli_query($db, $insertSql);
    $response["status"] = "ok";
    $response["msg"] = " 恭喜您注册成功！";
    // 

}
echo json_encode($response, true);
?>