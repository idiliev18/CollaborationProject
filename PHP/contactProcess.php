<?php
include("dbConnect.php");

$username = $_REQUEST['username'];
$email = $_REQUEST['email'];
$message = $_REQUEST['message'];
$ip = $_SERVER['REMOTE_ADDR'];
$to='collabcontactform@gmail.com';

$query = mysqli_query($db_connect, "INSERT INTO contact (username, email, message, ip) VALUES ('$username','$email','$message', '$ip')") or die(mysqli_error($db_connect));
mysqli_close($db_connect);

        $to='collabcontactform@gmail.com';
		$subject='Form Submission';
		$message="Name :".$username."\n"."Phone :".$email."\n"."IP: ".$ip."\n" "Wrote the following :"."\n\n".$message;
		$headers="From: ".$email;
mail($to, $subject, $message, $headers);


?>

<script>
	window.location.href = "../contact.html?note=success";
</script>