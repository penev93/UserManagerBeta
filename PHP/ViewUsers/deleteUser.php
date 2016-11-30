<?php
$userID=$_POST['userID'];

$server="localhost";
$user="root";
$dbPassword="";
$db="mediabasket";

$conn=mysqli_connect($server, $user, $dbPassword, $db);

if(! $conn )
   {
     die('Could not connect: ' . mysql_error());
   }
   else
   {
   		
   	$q="DELETE FROM users WHERE id_user=?";
  
	$stmt=$conn->prepare($q);

	$stmt->bind_param('s',$userID);

	$stmt->execute();
	
	 $stmt->free_result();
  	 mysqli_close($conn);
  	 echo "deleted";
  	}
?>