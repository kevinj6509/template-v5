window.onload = function () {
	let delay = 2; // 2 second delay before first word falls
	let nodes = document.querySelectorAll(".animate");
	
	/* turn <h1 class="animate">Web Dev is Fun!</h1>
		into <h1> <span>Web</span> <span>Dev</span> <span>is </span> <span>Fun</span></h1>
	
	*/
	for (let i = 0; i< nodes.length; i++){
		let words = nodes[i].innerText.split(" ");
		nodes[i].innerHTML = "";
		
			for (let j = 0; j < words.length; j++) {
				
				console.log(words[j]);
				let item = document.createElement("span");
				item.innerText = words[j];
				let calc = (delay + ((nodes.length + j) / 3));
				item.style.animationDelay = calc + "s";
				nodes[i].appendChild(item);
				
			} // inner for
		
	}// outer for
	
};