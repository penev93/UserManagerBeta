/*Admin Home page*/

//Layouts innerHTML start
var layoutPDFhome="<div class='row'>"+
				"<div class='col-sm-12 col-md-12 col-lg-12'>"+
				"<table id='tableView' class='table'>"+
					  "<thead>"+
					    "<tr>"+
					      "<th>#</th>"+
					      "<th>File</th>"+
					      "<th>Open</th>"+
					      "<th>Send Email</th>"+
					    "</tr>"+
					  "</thead>"+
					  "<tbody>"+
					  "</tbody>"+
					"</table>"+
					"<div class='modal fade mail-modal-sm' tabindex='-1' role='dialog' aria-labelledby='mySmallModalLabel' aria-hidden='true'>"+
						  "<div class='modal-dialog modal-lg'>"+
						    "<div class='modal-content'>"+
						      "<div><h4>Attached file </h4><span name='pdfSrcSend'></span>"+
						      	"<input name='emailTo' placeholder='valeri@gmail.com , Jimmy93@gmail.com' class='input-lg form-control' type='text'><br/>"+
						      	"<span style='color:red'>Separete emails with comma [ , ] for multiple emails</span>"+
						      "</div>"+
						      "<div><button type='button' id='Send' class='btn btn-default btn-md'>"+
							"<span class='glyphicon glyphicon-ok' aria-hidden='true'></span></button></div>"+
						    "</div>"+
						  "</div>"+
						"</div>"+
				"</div>"+
				"</div>"+
			"</div>";

var layoutEdit="<div class='container-fluid'>"+
			"<div class='viewUserStyle'>"+
			"<h4>Edit Users</h4>"+
			"<form class='form-inline'>"+
				"<!--search input -->"+
				"<div class='row'>"+
				"<div class='form-group col-sm-12 col-md-12 col-lg-12'>"+
					"<label for='User'>Username :  </label>"+
					"<input type='text' class='form-control' id='inputViewUser' placeholder='Valeri'>"+
				"</div>"+
				"</div>"+
				"<div class='row'>"+
				"<!-- End search input -->"+
				"<div class='form-group  col-sm-12 col-md-12 col-lg-12'>"+
					"<label class='radio-inline'><input type='radio' name='user' value='2'>Default User</label>"+
					"<label class='radio-inline'><input type='radio' name='user' value='1'>Admin</label>"+	
				"</div>"+
				"</div>"+
				"<button id='vUsrSrchBtn' type='submit' class='btn btn-primary'>Search</button>"+
			"</form>"+
		"</div>"+
			"<div class='row' style='margin-left:-60px;'>"+
				"<div class='col-sm-12 col-md-12 col-lg-12'>"+

					"<table class='table tViewUsers'>"+
  						"<thead class='thead-inverse'>"+
    						"<tr>"+
						      "<th>#</th>"+
						      "<th>User_id</th>"+
						      "<th>Username</th>"+
						      "<th>Password</th>"+
						      "<th>Role</th>"+
						      "<th>Edit</th>"+
						      
    						"</tr>"+
  						"</thead>"+
  						"<tbody>"+
  						"</tbody>"+
					"</table>"+
					"<div class='modal fade edit-modal-sm' tabindex='-1' role='dialog' aria-labelledby='mySmallModalLabel' aria-hidden='true'>"+
  "<div class='modal-dialog modal-sm'>"+
    "<div class='modal-content'>"+
      "<div id='userToEdit'></div>"+
      //
      "<button type='button' id='Edit' class='btn btn-default btn-md'>"+
						  "<span class='glyphicon glyphicon-ok' aria-hidden='true'></span></button>"+
    "</div>"+
  "</div>"+
"</div>"+
				"</div>"+
			"</div>"+
		"</div>";



var layoutDelete=	"<div class='container-fluid'>"+
			"<div class='viewUserStyle'>"+
			"<h4>View Users</h4>"+
			"<form class='form-inline'>"+
				"<!--search input -->"+
				"<div class='row'>"+
				"<div class='form-group col-sm-12 col-md-12 col-lg-12'>"+
					"<label for='User'>Username :  </label>"+
					"<input type='text' class='form-control' id='inputViewUser' placeholder='Valeri'>"+
				"</div>"+
				"</div>"+
				"<div class='row'>"+
				"<!-- End search input -->"+
				"<div class='form-group  col-sm-12 col-md-12 col-lg-12'>"+
					"<label class='radio-inline'><input type='radio' name='user' value='2'>Default User</label>"+
					"<label class='radio-inline'><input type='radio' name='user' value='1'>Admin</label>"+	
				"</div>"+
				"</div>"+
				"<button id='vUsrSrchBtn' type='submit' class='btn btn-primary'>Search</button>"+
			"</form>"+
		"</div>"+
			"<div class='row' style='margin-left:-60px;'>"+
				"<div class='col-sm-12 col-md-12 col-lg-12'>"+
					"<table class='table tViewUsers'>"+
  						"<thead class='thead-inverse'>"+
    						"<tr>"+
						      "<th>#</th>"+
						      "<th>User_id</th>"+
						      "<th>Username</th>"+
						      "<th>Password</th>"+
						      "<th>Role</th>"+
						      "<th>Delete</th>"+
						      
    						"</tr>"+
  						"</thead>"+
  						"<tbody>"+
  						"</tbody>"+
					"</table>"+
					"<div class='modal fade delete-modal-sm' tabindex='-1' role='dialog' aria-labelledby='mySmallModalLabel' aria-hidden='true'>"+
  "<div class='modal-dialog modal-sm'>"+
    "<div class='modal-content'>"+
      "<p id='userToDel'></p>"+
      "<button type='button' id='Delete' class='btn btn-default btn-md'>"+
						  "<span class='glyphicon glyphicon-remove' aria-hidden='true'></span></button>"+
    "</div>"+
  "</div>"+
"</div>"+
				"</div>"+
			"</div>"+
		"</div>";

//Layouts innerHTML end


//load pdf function start

function ajaxPDFs()
{
	$.ajax({
		url:"./PHP/pdfViewList.php",
		cache:false,
		method:"POST",
		success:function(obj)
		{
			var counter=0;
			for (var el in obj) {
				counter++;
				var pdf_id=obj[el].id_pdf;
				var name=obj[el].name;
				var pdf_src=obj[el].pdf_src;
				var html_id=obj[el].html_id;
				
				$("#tableView > tbody").append(
					"<tr><th scope='row'>"+counter +"</th>"+
					"<td>"+name+"</td>"+
					      "<td><a href='./PDFs/"+name+"' class='btn-view-pdf btn btn-primary btn-md active' role='button'>Open</a></td>"+
					      "<td><a data-toggle='modal'  data-target='.mail-modal-sm' class='btn-send-mail btn btn-primary btn-md active' role='button'>Send to</a></td></tr>"
					);
			}
		},  
		error: function (error) {
                 console.log(error[0]);
              }
	});
}
//load pdf function end


//Get User Data Function and display it Start

function getUser(user,usrOrAdmin,editOrDel){

$.ajax({
		url:"./PHP/ViewUsers/getUser.php",
		method:"POST",
		cache:false,
		data:{username:user,role:usrOrAdmin},
		success:function(obj){
			$(".tViewUsers > tbody").html("");
			var counter=0;
			for (var el in obj) {
					if(obj[el]=="")
					{
						$(".tViewUsers > tbody").html("");
						return false;
					}
				counter++;
				var user_id=obj[el].user_id;
				var username=obj[el].username;
				var password=obj[el].password;
				var role=obj[el].role;
				
				var roleIs="";
				if(role=="1")
				{
					role="admin";
					roleIs="<option selected>Admin</option><option >Default</option>"
				}else
				{
					role="default";
					roleIs="<option >Admin</option><option selected>Default</option>"
				}


				


				
				if(editOrDel=="Delete")
				{
					$(".tViewUsers > tbody").append(
					"<tr><th scope='row'>"+counter +"</th>"+
					"<td>"+user_id+"</td>"+
					"<td>"+username+"</td>"+
					      "<td>"+password+"</td>"+
					      "<td>"+role+"</td>"+
					      "<td><button type='button' data-toggle='modal' data-target='.delete-modal-sm' id='delete-"+user_id+"' class='btn btn-default btn-sm'>"+
						  "<span class='glyphicon glyphicon-remove' aria-hidden='true'></span> "+editOrDel+""+
						  "</button></td></tr>"
					);
				}

				else
				{
						$(".tViewUsers > tbody").append(
							"<tr><th scope='row'>"+counter +"</th>"+
							"<td>"+user_id+"</td>"+
							"<td><input type='text' class='col-sm-12' name='usernameEdit' value='"+username+"'></input></td>"+
					      	"<td><input type='text' class='col-sm-12' name='passwordEdit'  value='"+password+"'></input></td>"+
					      	"<td><select class='col-sm-12 ' name='roleEdit' >"+roleIs+"</select></td>"+
					      	//<input type='text' id='editRole' value='"+role+"'></input> "+if(role=="admin"){return 'selected'}+" "+if(role=="default"){return 'selected'}+"
					      	"<td><button type='button' data-toggle='modal' data-target='.edit-modal-sm' id='edit-"+user_id+"' class='btn btn-default btn-sm'>"+
						  	"<span class='glyphicon glyphicon-ok' aria-hidden='true'></span> "+editOrDel+""+
						  	"</button></td></tr>"
					);
				}
			}
				
			if(obj.length==0)
			{
				$(".tViewUsers > tbody").html("");
			}


		},error:function(error)
		{console.log(error);}
		});


}
//Get User Data Function and display it End


//Load Pdf Layout
$(document).on("click", "#viewPdfHome",function(ev){
	$("#main_index").html("");
	$("#main_index").append(layoutPDFhome);
	ajaxPDFs();
});

//Load Pdf Layout end




//load AdminHome layout start
$(document).ready(function(ev){
	$("#main_index").html("");
	$("#main_index").append(layoutPDFhome);


	//Set Username 
	$.ajax({
		url:"./PHP/AdminHomeFunction.php",
		cache:false,
		method:"POST",
		success:function(obj)
		{
			$("#admin_name").text(obj.username);
		},
		error:function(error)
		{
			console.log(error);
		}
	});

	//Load pdf files
	ajaxPDFs();


});

//AdminHome layout load end




//Send Emails to Users Start
$(document).on('click',"#Send", function(){
var to=$("input[name='emailTo']").val();
var emailTo = to.split(',');
var src=$("span[name='pdfSrcSend']").text();
var innerHTML=$(".mail-modal-sm").html();
	for (var i = 0; i < emailTo.length; i++) {
		emailTo[i]=emailTo[i].trim();
	}
	

$.ajax({
	url:"./PHP/SendMail/sendEmail.php",
	method:"POST",
	data:{emailTo:emailTo,src:src},
	cache:false,
	beforeSend:function(){
       $(".mail-modal-sm").html("<div class='container-fluid' style='padding-top:7%;background-color:white;width:30%;height:60%;'><h4>Sending.....</h4><div><img src='./images/loader.gif' "+
       	" style='200px;height 200px;'></div></div>");
    },
	complete:function(obj){
	$(".mail-modal-sm").html(innerHTML);	
	$(".mail-modal-sm").modal("hide");
	
		
	},
	error:function(error){console.log(error);}
});

});

//Send Emails to Users End



//Get user data start

	//Display users
$(document).on('click', '#vUsrSrchBtn', function(ev){
	ev.preventDefault();

		var usrOrAdmin=$("input[name=user]:checked").val();
			if(usrOrAdmin==undefined)
			{
				usrOrAdmin="";
			}
	var user=$("#inputViewUser").val();
		var title=$("h4").text();
			if (title.indexOf("Edit") >= 0)
			{
				getUser(user,usrOrAdmin,"Edit");
			}
			else if(title.indexOf("View") >= 0)
			{
				getUser(user,usrOrAdmin,"Delete");
			}
	});	



//function modal text delete and edit 
$(document).on('click', '.tViewUsers  button', function(ev){

	var el=$(this).attr("id");
	if(el.indexOf("edit")>=0)
	{
		var username=$(this).closest('tr').find("input[name='usernameEdit']").val();
		var password=$(this).closest('tr').find("input[name='passwordEdit']").val();
		var role=$(this).closest('tr').find(":selected").val();

		var elId=el.substring(5);
	$("#userToEdit").html("<h4>Edit user</h4><br/><p id='uIdModalEdit'>"+elId+"</p><br/><div><p>Username: <span id='uModalEdit'>"+username+ "</span></p></div><br/><div><p>Password: <span id='pModalEdit'>"+password+"</span></p></div><br/><div><p>Role:<span id='rModalEdit'>"+role+"</span></p></div>");	

	}
	else
	{
		var elId=el.substring(7);
	$("#userToDel").text("Do you want to delete user with id:"+elId);
	}
	
});



//Get user data end




//Edit start

$(document).on('click',"#viewEdit",function(ev){
$("#main_index").html("");
		$("#main_index").append(layoutEdit);
});


//Edit user request
$(document).on('click', '#Edit', function(ev){
		var n=$("#uIdModalEdit").text();
		var u=$("#uModalEdit").text();
		var p=$("#pModalEdit").text();
		var r=$("#rModalEdit").text();
		if(r=="Admin")
		{
			r="1";
		}else
		{
			r="2";
		}

	console.log(n);
$.ajax({
		url:"./PHP/ViewUsers/editUser.php",
		method:"POST",
		Type:"update",
		cache:false,
		data:{userID:n,username:u,password:p,role:r},
		success:function(obj){
			
			$(".tViewUsers > tbody").html("");
			$('.edit-modal-sm').modal('hide');
		},function(error){
			console.log(error);
		}
	
});
});

//Edit end






//Delete Start
$(document).on('click','#viewDelete',function(ev)
	{	
		$("#main_index").html("");
		$("#main_index").append(layoutDelete);
	});


//Delete request
$(document).on('click', '#Delete', function(ev){
	var n=$("#userToDel").text();
	var index=n.indexOf(":");
	
	var d=$("#userToDel").text().slice(index+1,n.length);
	console.log(d);
		$.ajax({
		url:"./PHP/ViewUsers/deleteUser.php",
		method:"POST",
		Type:"DELETE",
		cache:false,
		data:{userID:d},
		success:function(obj){

			$(".tViewUsers > tbody").html("");
			$('.delete-modal-sm').modal('hide');
		},function(error){
			console.log(error);
		}
	
});
});


//Delete End




//Send mail Start


	//get ID for Query
	$(document).on('click','.btn-send-mail',function(){
			var t=$(this).parent().siblings(":first").next().text();
			$("span[name='pdfSrcSend']").text(t);
			
	});




//Send mail End





//Upload Layout Start
$(document).on('click','#upload',function(){
	$("#main_index").html(
	"<form action='./PHP/Upload/uploadPHP.php' method='post' enctype='multipart/form-data'>"+
    "Select image to upload:"+
    "<input type='file' name='fileToUpload' id='fileToUpload'>"+
    "<input type='submit' value='Upload file' name='submit'></form>");

		
});
//Upload End



$(document).on('click', '.btn-view-pdf', function(){
	var el=$(this).closest("td").prev("td").text();

	$.ajax({
		url:"./PHP/Session.php",
		method:"POST",
		contentType: "application/json",
        dataType: "json",
		cache:false,
		data:{pdf_src:el},
		});
	});
