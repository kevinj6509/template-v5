let target = document.getElementById("card");

document.onmousemove = handleMouseMove;

function handleMouseMove(event) {
	const height = window.innerHeight;
	const width = window.innerWidth;
	
	//calculate angle of rotation
	const yAxisDegree = event.pageX / width * 180 - 90;
	const xAxisDegree = event.pageY / height * -180 + 90;
	
	target.style.transform = "rotateY(" + yAxisDegree + "deg) rotateX(" + xAxisDegree + "deg)";
	
} // handleMouseEvent