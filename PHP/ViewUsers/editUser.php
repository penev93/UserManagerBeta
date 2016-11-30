<?php
$userID=$_POST['userID'];
$username=$_POST['username'];
$password=$_POST['password'];
$role=$_POST['role'];

$server="localhost";
$user="root";
$dbPassword="";
$db="mediabasket";
	$userQ="";
	$passQ="";
	$roleQ="";
	
	if($username!="")
	{
		$userQ=" username =? ";	
	}

	if($password!="")
	{
		$passQ=" password=? ";
	}

	if($role!=""){
		$roleQ=" role_id=? ";
	}



$conn=mysqli_connect($server, $user, $dbPassword, $db);


$arrQ=array($userQ,$passQ,$roleQ);
$q="UPDATE users,user_role SET ";

$n=sizeof($arrQ);
for ($i=0; $i < $n; $i++) { 
	if($i==$n-1)
	{
		$q.=$arrQ[$i];
	}
	else
	{
		$q.=$arrQ[$i]." , ";
	}
	

}

	$q.=" WHERE id_user=? AND user_id=? ";

	$stmt=$conn->prepare($q);
if(! $conn )
   {
     die('Could not connect: ' . mysql_error());
   }
   	else
   {	
   		
   		$stmt->bind_param('sssss',$username,$password,$role,$userID,$userID);
   		$stmt->execute();
   		 $stmt->free_result();
  	 	mysqli_close($conn);
   		$updateError=$stmt->error;
	
  		 echo $updateError;
   	}



   		
   /*
	$stmt=$conn->prepare($q);
	if($username!="")
	{}
	

	$stmt->execute();
		 
  	}
  	*/
?>