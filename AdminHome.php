<?php session_start();?>
<!DOCTYPE HTML>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Mediabasket</title>
<script type="text/javascript" src="./JS/angular.min.js"></script>

<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="./Bootstrap/css/bootstrap.min.css">

<link rel="stylesheet" href="./CSS/adminHome.css">
<script type="text/javascript" src="./JS/jquery-3.1.0.min.js"></script>
<script type="text/javascript" src="./JS/adminHome.js"></script>

<script  src="./Bootstrap/js/bootstrap.min.js"></script>

</head>

<body>

<div class="container wrapper">
	<div class="col-sm-12 col-md-12 col-lg-12">

		<header>
			<div class="row">
				<div class="col-sm-12 col-md-12 col-lg-12">
					<h1>Admin home page</h1>
				</div>
			</div>
			<div class="row">
				<div class="logout col-sm-8 col-md-8 col-lg-8">
					<!--Dynamic change username--><span class="glyphicon glyphicon-user" aria-hidden="true"></span><span id="admin_name"></span>   |  <span class="glyphicon glyphicon-log-out r" aria-hidden="true"></span><span id="user_logout"><a href="index.php">  Logout</a></span>
				</div>
			</div>
		</header>
				   
		
		  <div class="container-fluid">
		    <nav class="navbar navbar-inverse">
		    <ul class="nav navbar-nav">
		      <li class="active"><a id="viewPdfHome" class="pointer nav-item nav-link active">View PDF<span class="sr-only">(current)</span></a></li>
		      <li class="dropdown">
		        <a class="pointer dropdown-toggle" data-toggle="dropdown" href="#">Users
		        <span class="caret"></span></a>
		        <ul class="dropdown-menu">
		          <li><a id="viewDelete" class="pointer">View/Delete</a></li>
		          <!--<li><a class="pointer">Add user</a></li>-->
		          <li><a id="viewEdit" class="pointer">Edit</a></li>
		        </ul>
		      </li>
		      <li><a id="upload" class="pointer">Upload</a></li> 
		      <li><a   class="pointer">Download</a></li> 
		      
		    </ul>
		    	</nav>
		  </div>

		  <!--Dynamic COntent-->
		<div id="main_index" class="container-fluid">
				
		</div>
		<!--END-->


	</div>
</div>


</body>

</html>



	