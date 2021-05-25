var click = true;
var isUgly = false;
var numClicks = 0;

var listOfAnimals = [" kiwi", " Cat", " Tardigrade", " Dog", " Mouse"];
var time = new Date();

function changeTitle() {
  var element = document.getElementById("foo");
  var animal;

  //element.innerHTML = listOfAnimals[0] + listOfAnimals[1] + listOfAnimals[2] + listOfAnimals[3] + listOfAnimals[4];

  // adds all animals to innerHTML
  element.innerHTML = "";
  for (animal of listOfAnimals) {
    element.innerHTML += animal + " ";
  }

  click++;
  checkWin();

  //element.innerHTML = "apple";
  click = false;
} //changeTitle

function changeABunchOfStuff() {
  var randNum;
  var element = document.getElementById("bottom");

  click++;
  checkWin();

  document.getElementById("bar").innerHTML = time.getSeconds();

  randNum = Math.floor(Math.random() * 5); // random # 1 - 4

  // put a random animal in the text
  element.innerHTML = listOfAnimals[randNum];

  if (!isUgly) {
    element.style.backgroundColor = "magenta";
    //element.innerHTML = "Woooooosh";
    element.style.fontFamily = "Comic Sans MS";
    element.style.color = "yellow";
    element.style.fontSize = "70px";

    element = document.getElementById("foo");
    if (element) {
      //element.className = (element.className == "hidden") ? "unhidden" : "hidden";
    }

    isUgly = true;
  } else {
    element.style.backgroundColor = "white";
    //element.innerHTML = "footer";
    element.style.fontSize = "1em";
    element.style.color = "black";
    element.style.fontFamily = "Ariel";
    isUgly = false;
  }
}

function changeBackgroundColour() {
  click++;
  checkWin();
  var element = document.getElementById("bar");

  element.style.backgroundColor = "blue";
}

function checkWin() {
  var element = document.getElementById("foo");

  if (click == 10) {
    element.innerHTML = "You Win!";
  }
}
