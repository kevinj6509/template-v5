// select circles
var select = document.querySelectorAll(".pulse");
var toggle = 0;
var cluster = "";
var instruments = "2";
var splitRow = "1";
let g = 0;
let p = 0;

window.onload = instrument(instruments);

// determine what keys the user presses
$(window).keypress(function (e) {
    var keyCode = e.which;
	var c = String.fromCharCode(e.keyCode);
	c = c.toLowerCase();
    console.log(c)
	
	if(c=="1"){instruments = "2"; instrument("2");}
	if(c=="2"){instruments = "1"; instrument("1");}
	if(c!=="1" && c!=="2"){
		pulse(c);
	}
}) // get key presses

// display a pulse of a certain colour when a specific key is pressed
function pulse (letter) {
	let color = "";
	
	// toggle so that user cannot start several animations at once, which would break it
	if(toggle <= 0){
		toggle ++;
		if(instruments !== "4"){	
			// find what colour the pulse should be, and what note should be played
			switch (letter) {
				case "a":
				case "q":
				case "z":
					color = "red";
					cluster = "1";
					break;
				case "w":
				case "s":
				case "x":
					color = "orange"; 
					cluster = "2";
					break;
				case "e":
				case "d":
				case "c":
					color = "yellow"; 
					cluster = "3";
					break;
				case "r":
				case "f":
				case "v":
					color = "lightGreen";
					cluster = "4";
					break;
				case "t":
				case "g":
				case "b":
					color = "darkGreen";
					cluster = "5";
					break;
				case "y":
				case "h":
				case "n":
					color = "blue";
					cluster = "6";
					break;
				case "u":
				case "j":
				case "m":
					color = "purple";
					cluster = "7";
					break;
				case "i":
				case "k":
				case ",":
					color = "black";
					cluster = "8";
					break;
				case "o":
				case "l":
				case ".":
					color = "magenta";
					cluster = "9";
					break;
				case "p":
				case ";":
				case "/":
					color = "pink"; 
					cluster = "10";
					break;
				default:
					color = "red";
					cluster = "1";
			}
		}
		
		
	console.log(color);
	
	// sends what note to play
	music(cluster);
	setIris(color);
	
	document.getElementById("pointer").classList.add(color);
	document.getElementById("pointer").classList.add("circle"); 
	setTimeout(reset, 250, color);
	}
}

function setIris (color) {	
	// document.getElementById("iIris").classList.add(color);
}

// if 1, play guitar. if 2, play piano
function instrument (ins) {
	instruments = ins;
	
	if (p == 0 && instruments == "2") { 
		p = 1; 
		document.getElementById("btn2").style.backgroundColor = "#008CBA";
		document.getElementById("btn2").style.color = "#ffffff";	
		
		g = 0; 
		document.getElementById("btn1").style.backgroundColor = "#ffffff"; 
		document.getElementById("btn1").style.color = "#000000";
	}
	
	if (g == 0 && instruments == "1") { 
		g = 1; 
		document.getElementById("btn1").style.backgroundColor = "#4CAF50";
		document.getElementById("btn1").style.color = "#ffffff";

		p = 0; 
		document.getElementById("btn2").style.backgroundColor = "#ffffff"; 
		document.getElementById("btn2").style.color = "#000000";
	}
	
	
}

// play specific audio file
function music (cluster) {
	
	
	if (instruments == "2") {
		var audio = new Audio("music/piano/" + cluster + ".mp3");
	} else if (instruments == "1") {
		var audio = new Audio("music/guitar/" + cluster + ".wav");
	}
	
	audio.play();
}


function reset (color) { 
	toggle = 0;
	document.getElementById("pointer").classList.remove("circle"); 
	document.getElementById("pointer").classList.remove(color);
}