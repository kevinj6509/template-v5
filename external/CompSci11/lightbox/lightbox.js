// display light box
function displayLightBox(imageNum) {
	
	// use to preload large image
	var image = new Image();
	
	// used to acess img tag with big image
	var bigImage = document.getElementById("bigImage");
	
	// update the big image to acess
	switch (imageNum){
		case 0: image.src = "images/arabian.jpg"; break;
		case 1: image.src = "images/dog.jpg"; break;
		case 2: image.src = "images/horseandpony.jpg"; break;
		case 3: image.src = "images/horse.jpg"; break;
		case 4: image.src = "images/pinto.jpg"; break;
		case 5: image.src = "images/tb.jpg"; break;
		
		default: image.src = "images/arabian.jpg"; break;
		
	} // switch
	
	// force big image to preload so we can get its width
	//then center it on page
	image.onload = function() {
	var width = image.width;
	document.getElementById("boundaryBigImage").style.width = width + "px";
	}
	
	// put big image into page
	bigImage.src = image.src;
	
	changeVisiblility("lightbox");
	changeVisiblility("boundaryBigImage");
}// displayLightBox

//changes the visiblility of divID
function changeVisiblility (divID) {
	var element = document.getElementById(divID);
	
	// if element exiss, it is considered true
	if (element) {
		element.className = (element.className == "hidden") ? "unhidden" : "hidden";
	}
	
}