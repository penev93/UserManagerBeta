<?php
	include_once "./PDF.php";
	header('Content-Type: application/json');

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
	   		
	   	$q="SELECT * FROM pdf ;";
	  
		$stmt=$conn->prepare($q);

		$stmt->execute();
		$result = $stmt->get_result();
		


		  while ($row = $result->fetch_assoc()) {
		  	$id=$row["id_pdf"];
		  	$name=$row["name"];
		  	$pdf_src=$row["pdf_src"];
		  	$html_id=$row["html_id"];

		  	$pdfObj=new PDF($id, $name, $pdf_src, $html_id);
		  	array_push($arr,$pdfObj);
	   }
	
	   /* free results  */
	   $stmt->free_result();
	  	 mysqli_close($conn);
	   
 		
	   	echo json_encode($arr);	
		}
	
?>