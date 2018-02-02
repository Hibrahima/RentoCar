function getUserDataAndSendToServer(){
		var userCard = {
			country: $("#Country option:selected" ).text(),
			cardNumber: $("#user_card_number").val(), 
			expirationDate: $("#user_card_expiration_date").val(), 
			cvCode: $("#user_card_cv_code").val()
		};
	    var user = {
			name: $("#user_name").val(),
			surname: $("#user_surname").val(),
			birthday: $("#user_birthday").val(),
			email: $("#user_email").val(),
			password: $("#user_password").val(),
			drivingLicence: $("#user_driving_licence").val(),
			address: $("#user_address").val(),
			city: $("#user_city").val(),
			zip: $("#user_zip").val(),
			card: userCard
		};

		// send all information to server 
		sendUserDataToServer(user);
}

function sendUserDataToServer(data){
	$.ajax({
		url: "/api/user/save",
		type: "POST",
		data: data,
		success: function(callback){
			if(callback === "Success"){
				$("#ventana1").modal("hide");
				$.notify("Successfully registered !", "success");
				document.getElementById("user_registration_form").reset();
			}
			else
				$.notify("Oups, something went wrong", "error");

		},
		error: function(err){
			console.log("Error occured while saving user "+err);
			$.notify("Oups, something went wrong", "error");
		}
	})
}

function login(data){
	$.ajax({
		url: "/api/user/login",
		type: "POST",
		data: data,
		success: function(callback){
			if(callback.resultCode == true){
				$("#ventana1").modal("hide");
				$.notify("You Successfully logged into the system !", "success");
				//Setting cookiees
				setCookie("user type", callback.userType);
				setCookie("user id", callback.userId);
				//Reset login form
				document.getElementById("user_login_form").reset();
				$("#login_menu").hide();
				$("#logout_menu").show();
				$("#logout_menu").click(function(e){
					var answer = confirm("Are you sure you want to log out?");
	                 if(answer == true){
	                 	logout();    
	                } 
					
				});

				var userType = getCookieByName("user type");
				if(userType == "admin"){
					$("#manage_reservation_menu").show();
	   				$("#newcar").show();
				}
				else if(userType == "user"){
					$("#manage_reservation_menu").show();
				}
			}
			else
				$.notify("Oups, something went wrong", "error");
		},
		error: function(err){
			console.log("Error while trying to log into the system");
			$.notify("Oups, something went wrong", "error");
		}
	})
}

function setCookie(name, value){
	document.cookie = name +" = "+value +'; Path=/;';
}

function getCookieByName(name){
	match = document.cookie.match(new RegExp(name + '=([^;]+)'));
  	if (match)
  		return match[1];
}

function appendOptions(userType){
	if(userType === "admin"){

	}
}

function populate(){
	var options = {
		BMW : ["BMW X5","BMW M4","BMW M5"],
		Audi : ["Audi Q3","Audi A5","Audi A8"],
		Ford : ["Ford Focus", "Ford Kuga"],
		Fiat : ["Fiat 500", "Fiat Panda"],
		Kia : ["Kia Picanto", "Kia Sportage"]
	};
	var selected = $('#car_brand').val();
	$('#car_model').empty();
	options[selected].forEach(function(element,index){
		$('#car_model').append('<option value="'+element+'">'+element+'</option>');
	});
}

function logout(){
	deleteCookie("user type");
	deleteCookie("user id");
	alert("You have Successfully logged out !");
	window.location.replace("/api");
}

function deleteCookie(cookieName){
	document.cookie = cookieName +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

