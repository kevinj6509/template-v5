//Declare Variables
var Equation = "";
var choice = ""; // Holds Last Number Or Operator
var solution = "";
var level = 0;
var used = 0;
var currentNum = 0;
var vFinalGame = "yes"; // Determines If Ads Are Shown
var isClicked = 0; // Checks if Exit Button Clicked
var isSqrt = 0;
var memory = "";

// Var To Hold If Solution Is Chosen
var numused1 = 0;
var numused2 = 0;
var numused3 = 0;
var numused4 = 0;
var numused5 = 0;
var numused6 = 0;
var numused7 = 0;
var numused8 = 0;

// Determine If Final Game Version, Includes Extra Features (Click Close Button On Left Advertisement)
function finalGame() {
  if (vFinalGame == "yes") {
    document.getElementById("flash").style.display = "block";
  } // if
  if (vFinalGame == "no") {
    document.getElementById("ad").style.display = "none";
    document.getElementById("bars").style.display = "none";
    document.getElementById("skip").style.display = "none";
    document.getElementById("flash").style.display = "none";
    document.getElementById("chickenBox").style.display = "none";
    document.getElementById("lol").style.display = "none";
    document.getElementById("exit2").style.display = "none";
  } // if
} // finalGame

// Increments Once Close Ad Is Clicked
function clicked() {
  isClicked++;
} // clicked

// Starts Move On Hover After Close Clicked
function move() {
  // Hide if Closed Is Clicked Twice
  if (isClicked == 2) {
    document.getElementById("chickenBox").style.display = "none";
  } // if

  // Only Moves After Close Is Clicked Once
  if (isClicked >= 1) {
    // Generates Rand Number, Sets to Quadrants
    var randTop = parseInt(Math.random() * 117) + 1;
    var sRandTop = randTop + "px";
    document.getElementById("chickenBox").style.top = sRandTop;

    // Generates Rand Number, Sets to Quadrants
    var randLeft = parseInt(Math.random() * 1270) + 1;
    var sRandLeft = randLeft + "px";
    document.getElementById("chickenBox").style.left = sRandLeft;
  } //if
} // move

// Close Button Clicked Twice, Close
function close1() {
  if (isClicked >= 2) {
    changeVisiblility("chickenBox");
  } // if
} // close1

// Go To Start Screen
function start() {
  display = document.getElementById("display");
  document.getElementById("pin").innerHTML = "Help";
  changeVisiblility("calculator");
  changeVisiblility("newstart");
  changeVisiblility("begin");
  changeVisiblility("timer");
  changeVisiblility("lvl");
  changeVisiblility("ctitle");
  changeVisiblility("refresh");
  changeVisiblility("flash");
  changeVisiblility("hideCalc");

  // Unhide Numbers To Solve
  for (var z = 0; z > 8; z++) {
    changeVisiblility("num" + 1);
  } // for

  display.style.backgroundColor = "#13cddb";
  display.style.backgroundImage = "none";
} // start

// Alert User To Click Begin
function errorBegin() {
  document.getElementById("pdisplay").style.color = "red";
  setTimeout(setRed, 500);
  setTimeout(setBlack, 500);
} // errorBegin

function setBlack() {
  document.getElementById("pdisplay").style.color = "black";
}

function setRed() {
  document.getElementById("pdisplay").style.color = "red";
}

// Displays Flash Overlay
function flash() {
  alert("Allow Flash to run?");
  document.getElementById("flash").style.display = "none";
  document.getElementById("ad").play();

  // Automatically Close Ad After 30 sec
  setTimeout(stopVideo, 30000);
  function stopVideo() {
    closeAd();
    return false;
  } // stopVideo
} // flash

// Pause And Hide Video Ad
function closeAd() {
  document.getElementById("ad").style.display = "none";
  document.getElementById("skip").style.display = "none";
  document.getElementById("bars").style.display = "none";
  document.getElementById("ad").pause();
} // closeAd

// Set Solution Numbers According To Level
function set() {
  if (level == 1) {
    document.getElementById("num1").innerHTML = "6";
    document.getElementById("num2").innerHTML = "12";
    document.getElementById("num3").innerHTML = "7";
    document.getElementById("num4").innerHTML = "18";
    document.getElementById("num5").innerHTML = "8";
    document.getElementById("num6").innerHTML = "20";
    document.getElementById("num7").innerHTML = "10";
    document.getElementById("num8").innerHTML = "50";
  } // if
  if (level == 2) {
    document.getElementById("num1").innerHTML = "-10";
    document.getElementById("num2").innerHTML = "24";
    document.getElementById("num3").innerHTML = "1";
    document.getElementById("num4").innerHTML = "32";
    document.getElementById("num5").innerHTML = "3";
    document.getElementById("num6").innerHTML = "100";
    document.getElementById("num7").innerHTML = "10";
    document.getElementById("num8").innerHTML = "625";
  } // if
  if (level == 3) {
    document.getElementById("num1").innerHTML = "-5";
    document.getElementById("num2").innerHTML = "20";
    document.getElementById("num3").innerHTML = "3";
    document.getElementById("num4").innerHTML = "33";
    document.getElementById("num5").innerHTML = "5";
    document.getElementById("num6").innerHTML = "82";
    document.getElementById("num7").innerHTML = "13";
    document.getElementById("num8").innerHTML = "100";
  } // if
  if (level == 4) {
    document.getElementById("num1").innerHTML = "3";
    document.getElementById("num2").innerHTML = "7";
    document.getElementById("num3").innerHTML = "4";
    document.getElementById("num4").innerHTML = "8";
    document.getElementById("num5").innerHTML = "5";
    document.getElementById("num6").innerHTML = "9";
    document.getElementById("num7").innerHTML = "6";
    document.getElementById("num8").innerHTML = "10";
  } // if
} // set

// Runs Equal And checkUsed
function runE() {
  equal();
  checkUsed();
} // runE

function checkUsed() {
  if (level == 1) {
    currentNum = parseInt(Equation);

    if (currentNum == 6) {
      numused1++;

      if (numused1 == 1) {
        document.getElementById("num1").style.textDecoration = "line-through";
        document.getElementById("num1").style.color = "red";
        used++;
      } // if
    } // if
    if (currentNum == 12) {
      numused2++;

      if (numused2 == 1) {
        document.getElementById("num2").style.textDecoration = "line-through";
        document.getElementById("num2").style.color = "red";
        used++;
      } // if
    } // if
    if (currentNum == 7) {
      numused3++;

      if (numused3 == 1) {
        document.getElementById("num3").style.textDecoration = "line-through";
        document.getElementById("num3").style.color = "red";
        used++;
      } // if
    } // if
    if (currentNum == 18) {
      numused4++;

      if (numused4 == 1) {
        document.getElementById("num4").style.textDecoration = "line-through";
        document.getElementById("num4").style.color = "red";
        used++;
      } // if
    } // if
    if (currentNum == 8) {
      numused5++;

      if (numused5 == 1) {
        document.getElementById("num5").style.textDecoration = "line-through";
        document.getElementById("num5").style.color = "red";
        used++;
      } // if
    } // if
    if (currentNum == 20) {
      numused6++;

      if (numused6 == 1) {
        document.getElementById("num6").style.textDecoration = "line-through";
        document.getElementById("num6").style.color = "red";
        used++;
      } // if
    } // if
    if (currentNum == 10) {
      numused7++;

      if (numused7 == 1) {
        document.getElementById("num7").style.textDecoration = "line-through";
        document.getElementById("num7").style.color = "red";
        used++;
      } // if
    } // if
    if (currentNum == 50) {
      numused8++;

      if (numused8 == 1) {
        document.getElementById("num8").style.textDecoration = "line-through";
        document.getElementById("num8").style.color = "red";
        used++;
      } // if
    } // if
  } // if

  if (level == 2) {
    currentNum = parseInt(Equation);

    if (currentNum == -10) {
      numused1++;

      if (numused1 == 1) {
        document.getElementById("num1").style.textDecoration = "line-through";
        document.getElementById("num1").style.color = "red";
        used++;
      } // if
    } // if
    if (currentNum == 24) {
      numused2++;

      if (numused2 == 1) {
        document.getElementById("num2").style.textDecoration = "line-through";
        document.getElementById("num2").style.color = "red";
        used++;
      } // if
    } // if
    if (currentNum == 1) {
      numused3++;

      if (numused3 == 1) {
        document.getElementById("num3").style.textDecoration = "line-through";
        document.getElementById("num3").style.color = "red";
        used++;
      } // if
    } // if
    if (currentNum == 32) {
      numused4++;

      if (numused4 == 1) {
        document.getElementById("num4").style.textDecoration = "line-through";
        document.getElementById("num4").style.color = "red";
        used++;
      } // if
    } // if
    if (currentNum == 3) {
      numused5++;

      if (numused5 == 1) {
        document.getElementById("num5").style.textDecoration = "line-through";
        document.getElementById("num5").style.color = "red";
        used++;
      } // if
    } // if
    if (currentNum == 100) {
      numused6++;

      if (numused6 == 1) {
        document.getElementById("num6").style.textDecoration = "line-through";
        document.getElementById("num6").style.color = "red";
        used++;
      } // if
    } // if
    if (currentNum == 10) {
      numused7++;

      if (numused7 == 1) {
        document.getElementById("num7").style.textDecoration = "line-through";
        document.getElementById("num7").style.color = "red";
        used++;
      } // if
    } // if
    if (currentNum == 625) {
      numused8++;

      if (numused8 == 1) {
        document.getElementById("num8").style.textDecoration = "line-through";
        document.getElementById("num8").style.color = "red";
        used++;
      } // if
    } // if
  } // if
  if (level == 3) {
    currentNum = parseInt(Equation);

    if (currentNum == -5) {
      numused1++;

      if (numused1 == 1) {
        document.getElementById("num1").style.textDecoration = "line-through";
        document.getElementById("num1").style.color = "red";
        used++;
      } // if
    } // if
    if (currentNum == 20) {
      numused2++;

      if (numused2 == 1) {
        document.getElementById("num2").style.textDecoration = "line-through";
        document.getElementById("num2").style.color = "red";
        used++;
      } // if
    } // if
    if (currentNum == 3) {
      numused3++;

      if (numused3 == 1) {
        document.getElementById("num3").style.textDecoration = "line-through";
        document.getElementById("num3").style.color = "red";
        used++;
      } // if
    } // if
    if (currentNum == 33) {
      numused4++;

      if (numused4 == 1) {
        document.getElementById("num4").style.textDecoration = "line-through";
        document.getElementById("num4").style.color = "red";
        used++;
      } // if
    } // if
    if (currentNum == 5) {
      numused5++;

      if (numused5 == 1) {
        document.getElementById("num5").style.textDecoration = "line-through";
        document.getElementById("num5").style.color = "red";
        used++;
      } // if
    } // if
    if (currentNum == 82) {
      numused6++;

      if (numused6 == 1) {
        document.getElementById("num6").style.textDecoration = "line-through";
        document.getElementById("num6").style.color = "red";
        used++;
      } // if
    } // if
    if (currentNum == 13) {
      numused7++;

      if (numused7 == 1) {
        document.getElementById("num7").style.textDecoration = "line-through";
        document.getElementById("num7").style.color = "red";
        used++;
      } // if
    } // if
    if (currentNum == 100) {
      numused8++;

      if (numused8 == 1) {
        document.getElementById("num8").style.textDecoration = "line-through";
        document.getElementById("num8").style.color = "red";
        used++;
      } // if
    } // if
  } // if
  if (level == 4) {
    currentNum = parseInt(Equation);

    if (currentNum == 3) {
      numused1++;

      if (numused1 == 1) {
        document.getElementById("num1").style.textDecoration = "line-through";
        document.getElementById("num1").style.color = "red";
        used++;
      } // if
    } // if
    if (currentNum == 7) {
      numused2++;

      if (numused2 == 1) {
        document.getElementById("num2").style.textDecoration = "line-through";
        document.getElementById("num2").style.color = "red";
        used++;
      } // if
    } // if
    if (currentNum == 4) {
      numused3++;

      if (numused3 == 1) {
        document.getElementById("num3").style.textDecoration = "line-through";
        document.getElementById("num3").style.color = "red";
        used++;
      } // if
    } // if
    if (currentNum == 8) {
      numused4++;

      if (numused4 == 1) {
        document.getElementById("num4").style.textDecoration = "line-through";
        document.getElementById("num4").style.color = "red";
        used++;
      } // if
    } // if
    if (currentNum == 5) {
      numused5++;

      if (numused5 == 1) {
        document.getElementById("num5").style.textDecoration = "line-through";
        document.getElementById("num5").style.color = "red";
        used++;
      } // if
    } // if
    if (currentNum == 9) {
      numused6++;

      if (numused6 == 1) {
        document.getElementById("num6").style.textDecoration = "line-through";
        document.getElementById("num6").style.color = "red";
        used++;
      } // if
    } // if
    if (currentNum == 6) {
      numused7++;

      if (numused7 == 1) {
        document.getElementById("num7").style.textDecoration = "line-through";
        document.getElementById("num7").style.color = "red";
        used++;
      } // if
    }
    if (currentNum == 10) {
      numused8++;

      if (numused8 == 1) {
        document.getElementById("num8").style.textDecoration = "line-through";
        document.getElementById("num8").style.color = "red";
        used++;
      } // if
    } // if
  } // if

  if (used == 8) {
    win();
  } // if
} // checkUsed

// Set Play Screen For Level 1
function level1() {
  level = 1;

  document.getElementById("plvl").innerHTML = "Level: 1";
  changeVisiblility("titlenums");
  changeVisiblility("numbers");

  changeVisiblility("pos2");
  changeVisiblility("posM");
  changeVisiblility("pos3");
  changeVisiblility("posP");
  document.getElementById("ptimer").innerHTML = "4:00";
} // level1

// Set Play Screen For Level 2
function level2() {
  level = 2;

  document.getElementById("plvl").innerHTML = "Level: 2";
  changeVisiblility("titlenums");
  changeVisiblility("numbers");

  changeVisiblility("posM");
  changeVisiblility("posS");
  changeVisiblility("pos5");
  changeVisiblility("pos2");
  changeVisiblility("posMr");
  changeVisiblility("posMin");
  document.getElementById("ptimer").innerHTML = "3:00";
} // level2

// Set Play Screen For Level 3
function level3() {
  level = 3;

  document.getElementById("plvl").innerHTML = "Level: 3";
  changeVisiblility("titlenums");
  changeVisiblility("numbers");

  changeVisiblility("posSqrt");
  changeVisiblility("posS");
  changeVisiblility("pos1");
  changeVisiblility("pos6");
  changeVisiblility("pos8");
  document.getElementById("ptimer").innerHTML = "5:00";
} // level3

// Set Play Screen For Level 4
function level4() {
  level = 4;

  document.getElementById("plvl").innerHTML = "Level: 4";
  changeVisiblility("titlenums");
  changeVisiblility("numbers");

  changeVisiblility("posD");
  changeVisiblility("posM");
  changeVisiblility("pos1");
  changeVisiblility("pos2");
  changeVisiblility("pos0");
  changeVisiblility("posMr");
  changeVisiblility("posMin");
  document.getElementById("ptimer").innerHTML = "3:00";
} // level 4

// Unhides NewBegin Button, Takes Off Div From Calculator
function newBegin() {
  changeVisiblility("newBegin");
  changeVisiblility("hideCalc");
  document.getElementById("ad").style.display = "none";
} // newBegin

// Runs Timer
function startTimer() {
  var presentTime = document.getElementById("ptimer").innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond(parseInt(timeArray[1]) - 1);
  if (s == 59) {
    m = m - 1;
  }

  // If Timer Runs Out
  if (m < 0) {
    lose();
    return false;
  } // if

  document.getElementById("ptimer").innerHTML = m + ":" + s;
  setTimeout(startTimer, 1000);
} // startTimer

// Add Zero If Second If Less Than 10, If < 0, Set To 59
function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {
    sec = "0" + sec;
  } // add zero in front of numbers < 10
  if (sec < 0) {
    sec = "59";
  }
  return sec;
} // checkSecond

// Add Choice (button clicked) To Equation (and square root)
function update() {
  if (choice == "sqrt") {
    choice = "Math.sqrt(" + Equation + ")";
    document.getElementById("pdisplay").innerHTML += "√";
    isSqrt = 1;
  } else {
    Equation += choice + "";
    document.getElementById("pdisplay").innerHTML = Equation;
    choice = "";
  } // if else
} // update

// Clears Equation
function clear() {
  Equation = "";
  document.getElementById("pdisplay").innerHTML = "";
} // clear

// Evaluate Equation & Square Root
function equal() {
  if (isSqrt == 1) {
    Equation = eval(choice);
    document.getElementById("pdisplay").innerHTML = Equation;
  } else {
    Equation = eval(Equation);
    document.getElementById("pdisplay").innerHTML = Equation;
  } // if else

  isSqrt = 0;
} // equal

// Set Choice And Run Update
function button1() {
  choice = 1;
  update();
} // button 1
function button2() {
  choice = 2;
  update();
} // button 2
function button3() {
  choice = 3;
  update();
} // button 3
function button4() {
  choice = 4;
  update();
} // button 4
function button5() {
  choice = 5;
  update();
} // button 5
function button6() {
  choice = 6;
  update();
} // button 6
function button7() {
  choice = 7;
  update();
} // button 7
function button8() {
  choice = 8;
  update();
} // button 8
function button9() {
  choice = 9;
  update();
} // button 9
function button0() {
  choice = 0;
  update();
} // button 0

function buttonS() {
  choice = "-";
  update();
} // button S
function buttonP() {
  choice = "+";
  update();
} // button P
function buttonD() {
  choice = "/";
  update();
} // button D
function buttonM() {
  choice = "*";
  update();
} // button M
function buttonSqrt() {
  choice = "sqrt";
  update();
} // button SqrtO

// Lets You Delete Last Char off String
function Delete() {
  Equation = ("" + Equation).substring(0, Equation.length - 1);
  document.getElementById("pdisplay").innerHTML = Equation;
} // Delete

function buttonC() {
  choice = "C";
  clear();
} // buttonC
function buttonMr() {
  choice = "Mr";
  update();
} // buttonMr
function buttonMin() {
  choice = "Min";
  update();
} // buttonMin

function refresh() {
  location.reload();
} // refresh

function ins() {
  changeVisiblility("lightbox");
  changeVisiblility("instruction");
} // ins

function exit() {
  changeVisiblility("lightbox");
  changeVisiblility("instruction");
} // exit

function changeVisiblility(divID) {
  var element = document.getElementById(divID);

  // if element exits, it is considered true
  if (element) {
    element.className = element.className == "hidden" ? "unhidden" : "hidden";
  } // if
} // changeVisiblility

// Shows Win Screen
function win() {
  changeVisiblility("win");
  changeVisiblility("calculator");
  changeVisiblility("begin");
  changeVisiblility("timer");
  changeVisiblility("lvl");
  changeVisiblility("refresh");
  changeVisiblility("ins");
  changeVisiblility("replay");
} // win

// Shows Lose Screen
function lose() {
  changeVisiblility("lose");
  changeVisiblility("calculator");
  changeVisiblility("begin");
  changeVisiblility("timer");
  changeVisiblility("lvl");
  changeVisiblility("refresh");
  changeVisiblility("ins");
  changeVisiblility("replay");
} // lose

// Restarts Game
function replay() {
  location.reload();
} // replay

// When the user clicks on the button, toggle between hiding and showing the dropdown content
function newstart() {
  document.getElementById("myDropdown").classList.toggle("show");
} // NewStart

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      } // if
    } // for
  } // if
}; // function
