<?php 
header('Content-Type: application/json');
include_once "../User.php";

$u = $_POST["username"];
$r = $_POST["role"];
$q="";
$server="localhost";
		$user="root";
		$dbPassword="";
		$db="mediabasket";

		$conn=mysqli_connect($server, $user, $dbPassword, $db);

		$arr=array();
	if(! $conn )
	   {
	     die('Could not connect: ' . mysql_error());
	   }
	   else
	   {

	   		$x=strcmp($u,"");
	   		$y=strcmp($r,"");

	   	
	   		if($x>0 && $y==0)
	   		{
	   			$q="SELECT * FROM users u LEFT JOIN user_role r ON u.id_user=r.user_id WHERE u.username LIKE ? ";
	   		}
	   		else if($x==0 && $y>0)
	   		{
	   			$q="SELECT * FROM users u LEFT JOIN user_role r ON u.id_user=r.user_id WHERE r.role_id =? ;";
	   		}
	   		else if($x>0 && $y>0)
	   		{
	   			$q="SELECT * FROM users u LEFT JOIN user_role r ON u.id_user=r.user_id WHERE r.role_id= ? AND u.username LIKE ? ;";
	   		}
	   	
	  
	  		
		$stmt=$conn->prepare($q);

			if($x>0 && $y==0)
	   		{
	   			$u='%'.$u.'%';
	   			$stmt->bind_param('s',$u);
	   		}
	   		 else if($x>0 && $y>0)
	   		{
	   			$u='%'.$u.'%';
	   		$stmt->bind_param('ss',$r,$u);
	   		}

	   		else if($x==0 && $y>0)
	   		{
	   			
	   			$stmt->bind_param('s',$r);
	   		}
	   	
	   		
		
		$stmt->execute();
		$result = $stmt->get_result();
			if($result!=false){
				while ($row = $result->fetch_assoc()) {
			  	$id=$row["user_id"];
		  		$username=$row["username"];
		  		$password=$row["password"];
		  		$role=$row["role_id"];

			  	$usr=new User($id, $username, $password, $role);
			  	array_push($arr,$usr);
	   			}
			}else
			{
				array_push($arr,"");
			}

			
		  
		
	  // $arr=array($u,$r);
	   /* free results  */
	   
	   $stmt->free_result();
	   
	  	 mysqli_close($conn);
	   
 		
	   	echo json_encode($arr);	
		
	}
?>
