const signUpButton = document.getElementById('signUp');


const signInButton = document.getElementById('signIn');
const container = document.getElementById('containers');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});



$(".btn").click(function(){
	$(".input").toggleClass("active").focus;
	$(this).toggleClass("animate");
	$(".input").val("");
  });