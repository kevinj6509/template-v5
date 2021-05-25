boy = document.getElementById("b");
dog = document.getElementById("p");
cat = document.getElementById("t");
bal = document.getElementById("w");

function f1 () {
	b.style.backgroundImage = "url('images/b.png')";
	p.style.backgroundImage = "url('images/p.png')";
	t.style.backgroundImage = "url('images/t.png')";
	w.style.backgroundImage = "url('images/w.png')";
}

function f2 () {
	b.style.backgroundImage = "url('images/w.png')";
	p.style.backgroundImage = "url('images/b.png')";
	t.style.backgroundImage = "url('images/p.png')";
	w.style.backgroundImage = "url('images/t.png')";
	
}

function f3 () {
	b.style.backgroundImage = "url('images/t.png')";
	p.style.backgroundImage = "url('images/w.png')";
	t.style.backgroundImage = "url('images/b.png')";
	w.style.backgroundImage = "url('images/p.png')";
}

function f4 () {
	b.style.backgroundImage = "url('images/p.png')";
	p.style.backgroundImage = "url('images/t.png')";
	t.style.backgroundImage = "url('images/w.png')";
	w.style.backgroundImage = "url('images/b.png')";
}