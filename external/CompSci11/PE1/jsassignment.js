// calc days to xmas


function part1a() {
	var day = new Date();
	document.getElementById("part1").innerHTML = 25 - day.getDate();
}

var g = true;


// toggle border between #ff00ff and green
function part1(){
	
	if (g == true){
		part1b = document.getElementById("part1");
		part1b.style.borderColor = "#ff00ff"
	} else {
		part1b = document.getElementById("part1");
		part1b.style.borderColor = "green"
		
	}
	
	if(g == true){
		g = false;
	} else {
		g = true;
	}
}


// string manipulation function
function part2() {
	var song;
	var quote;
	var t;
	
   song = document.getElementById("song").value;
   
   quote = document.getElementById("quote").value;
   
   
   t = song + " " + quote
   
	var tl = t.length;
   
   t += " Your quote is: " + tl + " characters long";


	var   t2 = t.replace(/and/g, "&");

   
   document.getElementById("part2").innerHTML = t2;
   
}


// Arrays, While, Prompts, While, if, window.location, and For..in
function part3() {
	var array = [];
	var index = 0;
	
	var math = document.getElementById("math").value;
	
	
	if(math > 9 && math < 100){
		document.getElementById("part3").innerHTML = "";
		for(var x = 0; x < math; x++){
			array[x] = parseInt(Math.random() * 900) + 101;
			document.getElementById("part3").innerHTML += array[x] + " ";
		}
	} else{
		alert("Number is not between 10 an 99");
		
		 window.location.assign("http://www.4flush.com/wp-content/uploads/2013/03/23869364.jpg")
	}
	

}


