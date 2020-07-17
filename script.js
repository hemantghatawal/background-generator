var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

var randomGradient = document.querySelector(".random");

function randomBackground(){
	var letters = "0123456789ABCDEF";  

	var randColor1 = '#';
	var randColor2 = '#';

    for (var i = 0; i < 6; i++){
		randColor1 += letters[(Math.floor(Math.random() * 16))];
		randColor2 += letters[(Math.floor(Math.random() * 16))];		
	}

	body.style.background = 
	"linear-gradient(to right, " 
	+ randColor1 
	+ ", " 
	+ randColor2
	+ ")";

	color1.value = randColor1;
	color2.value = randColor2;
	css.textContent = body.style.background + ";";
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

randomGradient.addEventListener("click", randomBackground);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);