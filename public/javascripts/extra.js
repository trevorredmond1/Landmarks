
var signupform = document.getElementById('signupform');
var loginform = document.getElementById('loginform');
var maintext2 = document.getElementById('maintext2');




document.getElementById("signup").addEventListener('click',function(){


	signupform.style.display = "block";
	loginform.style.display = "none";

	maintext2.style.height = "570px";
	maintext2.style.top = "15%";

})


document.getElementById("login").addEventListener('click',function(){


	loginform.style.display = "block";
	signupform.style.display = "none";

	maintext2.style.height = "300px";
	maintext2.style.top = "30%";


})

