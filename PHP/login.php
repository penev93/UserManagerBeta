<?php 
      session_start();
header('Content-Type: application/json');
include_once "./User.php";

$username=$_POST['username'];
$password=$_POST['password'];



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
   		
   	$q="SELECT * FROM users u LEFT JOIN user_role r ON u.id_user=r.user_id WHERE u.username=? AND u.password=? ;";
  
	$stmt=$conn->prepare($q);

	$stmt->bind_param('ss',$username,$password);

	$stmt->execute();
	$result = $stmt->get_result();
	
	 $num_of_rows = $result->num_rows;
	 //if ($num of rows) wrong user
	 //
	 $user_data=new User("","","","");
	  while ($row = $result->fetch_assoc()) {



        
        $u=$row['username'];
        $p=$row["password"];
        $r=$row["role_id"];

        $_SESSION["username"]=$u;
        $_SESSION["password"]=$p;
        $_SESSION["role_id"]=$r;
        $user_data=new User("",$u,$p,$r);
   }

   /* free results */
   $stmt->free_result();
  	 mysqli_close($conn);
   
   	echo json_encode($user_data);	
   
   
   }
   
?>