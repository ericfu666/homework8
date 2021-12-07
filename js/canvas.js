// Variables!
var radius = 5;
var x = 50;
var y =150;

var canvas = document.querySelector("#canvas")
var ctx = canvas.getContext("2d");
var colorPicker = document.querySelector("input");
var up= false;

ctx.fillStyle="rgb(255,0,0)";


// I would add more variables for x, y, radius, and color


//Listeners!!
//Add a listener for loading the window
//Add a listener for the color picker
//Add a listener for the mouse movement (started below)
//Add a listener for the key events (started below)

window.addEventListener("resize",function(e){
	canvas.width=0.75*window.innerWidth;
	canvas.height=0.75*window.innerHeight;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
})

canvas.addEventListener('mousemove', function (e) {
	draw(e);
})

colorPicker.addEventListener("change",function(e){
	ctx.fillStyle=colorPicker.value;
})


//Add a listener for the keydown
document.addEventListener('keydown', function(e){
	console.log(this);
	console.log(e)
	switch (e.key) {
		case "b":
			ctx.fillStyle = "rgb(0,0,255)";
			break;
		case "r":
			ctx.fillStyle = "rgb(255,0,0)";
			break;
		case "g":
			ctx.fillStyle = "rgb(0,255,0)";
			break;
		case "y":
			ctx.fillStyle = "rgb(255,255,0)";
			break;
		case " ":
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			break;
		case "ArrowUp":
			up = true;
			break;
		case "ArrowDown":
			up = false;
			break;
		default:
			break;
	}
})

// Functions!
// I would add a function for draw
function draw(e){
	if (!up){
		console.log("I am going to draw!!");
		var posX=e.clientX;
		var posY=e.clientY;
		ctx.beginPath();
		ctx.arc(posX,posY,radius,0,2*Math.PI);
		ctx.fill();
	}
}

