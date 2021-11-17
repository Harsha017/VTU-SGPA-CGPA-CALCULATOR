<?php

$email = $_POST['email'];
$password = $_POST['password'];

// data Base Connection

$con = new mysqli('localhost','root','','register_db');
if($con->connect_error){
    die("Connection Failed : ".$conn->connect_error);
}else{
    $stmt = $con->prepare("select *from users where email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt_result = $stmt->get_result();
    if($stmt_result->num_rows > 0) {
        $data = $stmt_result->fetch_assoc();
        if($data['password'] === $password){
            echo header('location:Home.html');
         }else{
            echo "<h2>Invalid Email OR Password</h2>";
         }
    } 
     else{
        echo "<h2> Invalid Email OR Password</h2>";
     }
}   
?>