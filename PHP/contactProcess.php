<?php
include("dbConnect.php");

$username = $_REQUEST['username'];
$email = $_REQUEST['email'];
$message = $_REQUEST['message'];
$ip = $_SERVER['REMOTE_ADDR'];

$query = mysqli_query($db_connect, "INSERT INTO contact (username, email, message, ip) VALUES ('$username','$email','$message', '$ip')") or die(mysqli_error($db_connect));
mysqli_close($db_connect);

?>

<script>
	window.location.href = "../contact.html?note=success";
</script>