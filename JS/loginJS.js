$(window).on("load",function(ev){
	
	$("body").append("<div class='x'>"+
"</div>"+
	"<div class='container'>"+
		"<div class='formCenter'>"+
			"<div class='col-sm-12 col-md-8 col-lg-10 col-md-offset-1 well'>"+
				"<legend>Login</legend>"+
					"<form method='POST'  id='loginForm'>"+
						"<div class='input-group input-group-sm'>"+
							"<span class='glyphicon glyphicon-user input-group-addon'></span>"+
							"<input type='username' class='form-control' id='inputUsername' name='username' placeholder='Username'>"+
							"</div>"+

							"<span class='log_error_user'></span>"+
						
						"<div class='input-group input-group-sm'>"+
							"<span class='glyphicon glyphicon-lock input-group-addon'></span>"+
							"<input type='password' class='form-control' "+
							"id='inputPassword' name='password' placeholder='Password'>"+
						"</div>"+
						"<span class='log_error_pass'></span><br/>"+
						"<button type='submit' class='btn btn-default'>"+
							"Login"+
						"</button>"+
					"</form>"+
			 "</div>"+
	"</div>"+
	"</div>");

	$("#loginForm").on("submit",function(ev){
		ev.preventDefault();
		
		var user=$("#inputUsername").val();
		var pass=$("#inputPassword").val();

		$.ajax({
		url:"./PHP/login.php",
		cache:false,
		method:"POST",
		data:{username:user,password:pass},
		success:function(obj)
		{
			console.log(obj);
			if(obj.username!="")
			{
				//there is user with this username
					if(obj.role==1)
					{
						window.open("AdminHome.php","_self");
					}
					else
					{
							console.log("true");
						//default user
					}	
			}
			else
			{	
				$(".log_error_user").html("Incorrect username");
				$(".log_error_pass").html("Incorrect password");

			}
		},error:function(error){console.log(error);}
		});

		
		
	});	
});


	

	

