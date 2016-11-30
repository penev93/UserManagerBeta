<?php
$target_dir = @"C:/xamppp/htdocs/mediabasket/PDFs/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
// Check if image file is a actual image or fake image

// Check if file already exists
if (file_exists($target_file)) {
    echo "Sorry, file already exists.";
    $uploadOk = 0;
}
// Check file size
if ($_FILES["fileToUpload"]["size"] > 50000000) {
    echo "Sorry, your file is too large.";
    $uploadOk = 0;
}
// Allow certain file formats
if($imageFileType != "pdf" && $imageFileType != "html"  ) {
    echo "Sorry, only pdf files are allowed.";
    $uploadOk = 0;
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {

    	/*insert Start*/
    	$q="";
		$fileName=$_FILES["fileToUpload"]["name"];
		$filePath="./PDFs/".$fileName;
		$server="localhost";
		$user="root";
		$dbPassword="";
		$db="mediabasket";

		$conn=mysqli_connect($server, $user, $dbPassword, $db);

		
	   			$q="INSERT INTO pdf (name,pdf_src)
				VALUES (?,?)";
	   		
		$stmt=$conn->prepare($q);

			$stmt->bind_param('ss',$fileName,$filePath);
	   	
	   		
		
		if($stmt->execute())
		{
			echo "Ok ! ";
		}
		else
		{
			echo "no";
		}
		
	   $stmt->free_result();
	   
	  	 mysqli_close($conn);
	   

 		
    	/*Insert End*/



        echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}




	   	
