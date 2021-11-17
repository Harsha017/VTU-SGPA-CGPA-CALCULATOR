<?php
header('location:Login.html');
$Username = $_POST['Username'];
$password = $_POST['password'];
$email = $_POST['email'];
$phoneno = $_POST['phoneno'];

//database connection
$conn = new mysqli('localhost','root','','register_db');
if($conn->connect_error){
    die('Connection Failed : '.$conn->connect_error);
}else{
    $stmt = $conn->prepare("insert into users(user_name,password,email,phone)
    values(?, ?, ?, ?)");
    $stmt->bind_param("sssi", $Username, $password, $email, $phoneno);
    $stmt->execute();
    echo "Registration Successfully...";
    $stmt->close();
    $conn->close();
}
?>
