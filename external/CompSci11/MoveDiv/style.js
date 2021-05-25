var isUp = true;

function myFirstFunction() {
  var rightDiv = document.getElementById("right");

  if (isUp) {
    rightDiv.style.backgroundColor = "red";
    rightDiv.style.top = "300px";
    rightDiv.style.right = "300px";
    rightDiv.style.fontFamily = "Comic Sans MS";
    rightDiv.style.color = "black";
    isUp = false;
  } else {
    rightDiv.style.backgroundColor = "blue";
    rightDiv.style.top = "0px";
    rightDiv.style.right = "0px";
    rightDiv.style.fontFamily = "Arial";
    rightDiv.style.color = "green";
    isUp = true;
  }
}

function mySecondFunction() {
  var leftDiv = document.getElementById("left");

  if (isUp) {
    leftDiv.style.backgroundColor = "red";
    leftDiv.style.top = "300px";
    leftDiv.style.right = "300px";
    leftDiv.style.fontFamily = "Comic Sans MS";
    leftDiv.style.color = "black";
    isUp = false;
  } else {
    leftDiv.style.backgroundColor = "blue";
    leftDiv.style.top = "0px";
    leftDiv.style.right = "0px";
    leftDiv.style.fontFamily = "Arial";
    leftDiv.style.color = "green";
    isUp = true;
  }
}
