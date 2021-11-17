<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="utf-8">
    <title> Registration page</title>
    <link rel="stylesheet" href="Registration.css">
    <link rel="icon" href="images/o-1.png">
</head>
<body>
<div class="Center">
    <img src="images/o-1.png" class="avatar"> 
    <h1>Registration</h1>
        <form action="Connect.php" method="POST">
        <div class="txt_field">
            <input type="text" required id="Username" name="Username"/>
            <span></span>
            <label> Username</label>
        </div>
        <div class="txt_field">
            <input type="email" required id="email" name="email">
            <span></span>
            <label>Email </label>
        </div>
        <div class="txt_field">
            <input type="Phone No" required id="phoneno" name="phoneno">
            <span></span>
            <label>Phone Number</label>
        </div>
        <div class="txt_field">
            <input type="password" required id="password" name="password">
            <span></span>
            <label> Password</label>
        </div>
        
        <input type="submit" value="Register">
        <div class="signup_link">
        Already Have An Account      <a href="Login.html">Login</a>

        </div>
    </form>
    </div>
</body>
</html>