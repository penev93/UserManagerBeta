<?php
header('Content-Type: application/json');
include_once "./User.php";


session_start();


		$u=$_SESSION['username'];
		$p=$_SESSION['password'];
		$r=$_SESSION['role_id'];

		$user_data=new User("",$u,$p,$r);

		echo json_encode($user_data);
	
?>
