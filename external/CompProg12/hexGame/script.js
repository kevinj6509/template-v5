let colorSample = null; // the color sample element
let answers = []; // array of the answer elements
let correctColorCode = null; // correct answer of actual color sample
let score = 0; // number of correct answers
let total = 0; // total number of questions
let level = 1; // current level user is on
let toggle = 0; // make sure user cannot double click button
let mode = 1; // keep track of current mode
let maxLevel = 3; // current working number of levels
let ansAmount = 2; // amount of possible answers

// initizalize page
window.onload = function() {
  resetLevel();
  correctButton();
  correctMode();

  colorSample = document.getElementById("colorSample");

  //initialize array of elements with all possible answers
  answers.push(document.getElementById("a"));
  answers.push(document.getElementById("b"));
  answers.push(document.getElementById("c"));
  answers.push(document.getElementById("d"));
  answers.push(document.getElementById("e"));
  answers.push(document.getElementById("f"));
  answers.push(document.getElementById("g"));
  answers.push(document.getElementById("h"));

  // add onclick events to all possible answers
  for (let i = 0; i < answers.length; i++) {
    answers[i].addEventListener("click", function() {
      if (mode == 1) {
        markIt1(this);
      }
      if (mode == 2) {
        markIt2(this);
      }
    });
  }

  // load a new question
  loadNewQuestion();
};

// if user clicks level buttons, update
// if user selects mode buttons, change mode
function toggleLevel(lvl) {
  level = lvl;
  score = 0;
  document.getElementById("score").innerHTML = "0 / 0";

  correctButton();
  resetLevel();
  loadNewQuestion();
} // toggleLevel

// switch layout for each mode. reload question
function toggleMode(mod) {
  mode = mod;
  correctMode();
  loadNewQuestion();
}

// restyles the page for each display, hides old menu
function correctMode() {
  if (mode == 1) {
    document.getElementById("btn4").style.backgroundColor = "#008CBA";
    document.getElementById("btn4").style.color = "#ffffff";

    document.getElementById("btn5").style.backgroundColor = "#ffffff";
    document.getElementById("btn5").style.color = "#000000";

    document.getElementById("colorSample").style.display = "block";
    document.getElementById("hexDisplay").style.display = "none";

    for (let i = 0; i < answers.length; i++) {
      answers[i].style.backgroundColor = "#787878";
    } // for
  } // if

  if (mode == 2) {
    for (let i = 0; i < answers.length; i++) {
      answers[i].innerHTML = "#??????";
    } // for

    document.getElementById("btn5").style.backgroundColor = "#4CAF50";
    document.getElementById("btn5").style.color = "#ffffff";

    document.getElementById("btn4").style.backgroundColor = "#ffffff";
    document.getElementById("btn4").style.color = "#000000";

    document.getElementById("colorSample").style.display = "none";
    document.getElementById("hexDisplay").style.display = "block";
  } // if
} // correctMode

// toggle the current active buttons for what level you are on
function correctButton() {
  if (level == 1) {
    document.getElementById("btn1").style.backgroundColor = "#008CBA";
    document.getElementById("btn1").style.color = "#ffffff";

    document.getElementById("btn2").style.backgroundColor = "#ffffff";
    document.getElementById("btn2").style.color = "#000000";

    document.getElementById("btn3").style.backgroundColor = "#ffffff";
    document.getElementById("btn3").style.color = "#000000";
  } // if

  if (level == 2) {
    document.getElementById("btn2").style.backgroundColor = "#4CAF50";
    document.getElementById("btn2").style.color = "#ffffff";

    document.getElementById("btn1").style.backgroundColor = "#ffffff";
    document.getElementById("btn1").style.color = "#000000";

    document.getElementById("btn3").style.backgroundColor = "#ffffff";
    document.getElementById("btn3").style.color = "#000000";
  } // if

  if (level == 3) {
    document.getElementById("btn3").style.backgroundColor = "#f44336";
    document.getElementById("btn3").style.color = "#ffffff";

    document.getElementById("btn2").style.backgroundColor = "#ffffff";
    document.getElementById("btn2").style.color = "#000000";

    document.getElementById("btn1").style.backgroundColor = "#ffffff";
    document.getElementById("btn1").style.color = "#000000";
  } // if
} // correctButton

// reset level when you start next level
function resetLevel() {
  let levels = level + "";
  console.log("Entered " + levels + level);

  switch (levels) {
    case "1":
      document.getElementById("a").style.display = "inline";
      document.getElementById("b").style.display = "inline";
      document.getElementById("c").style.display = "none";
      document.getElementById("d").style.display = "none";
      document.getElementById("e").style.display = "none";
      document.getElementById("f").style.display = "none";
      document.getElementById("g").style.display = "none";
      document.getElementById("h").style.display = "none";
      ansAmount = 2;
      break;
    case "2":
      document.getElementById("a").style.display = "inline";
      document.getElementById("b").style.display = "inline";
      document.getElementById("c").style.display = "inline";
      document.getElementById("d").style.display = "inline";
      document.getElementById("e").style.display = "none";
      document.getElementById("f").style.display = "none";
      document.getElementById("g").style.display = "none";
      document.getElementById("h").style.display = "none";
      ansAmount = 4;
      break;
    case "3":
      document.getElementById("a").style.display = "inline";
      document.getElementById("b").style.display = "inline";
      document.getElementById("c").style.display = "inline";
      document.getElementById("d").style.display = "inline";
      document.getElementById("e").style.display = "inline";
      document.getElementById("f").style.display = "inline";
      document.getElementById("g").style.display = "inline";
      document.getElementById("h").style.display = "inline";
      ansAmount = 8;
      break;
  } // switch
} // resetLevel

//marks current question
function markIt1(elem) {
  console.log(level);

  let gotItRight = false;

  if (total != 10) {
    total++;

    console.log("comparing" + elem.innerHTML + " to " + correctColorCode);

    // record if it is correct
    if (elem.innerHTML == correctColorCode) {
      score++;
      gotItRight = true;
    }

    document.getElementById("score").innerHTML = score + " / " + total;

    window.setTimeout(function() {
      if (gotItRight) {
        colorSample.innerHTML = "Correct!";
      } else {
        colorSample.innerHTML = "Incorrect!";
      }
    }, 100);

    window.setTimeout(function() {
      loadNewQuestion();
    }, 1300);
  }

  if (total == 10) {
    winLevel();
    resetLevel();
    correctButton();
  } // if
} // markIt

//marks current question
function markIt2(elem) {
  let rgb = convertToHex(elem.style.backgroundColor);
  console.log(rgb);

  let gotItRight = false;

  if (total != 10) {
    total++;

    console.log("comparing" + elem.innerHTML + " to " + correctColorCode);

    // record if it is correct
    if (rgb == correctColorCode) {
      score++;
      gotItRight = true;
    }

    document.getElementById("score").innerHTML = score + " / " + total;

    window.setTimeout(function() {
      if (gotItRight) {
        document.getElementById("hexDisplay").innerHTML = "Correct!";
      } else {
        document.getElementById("hexDisplay").innerHTML = "Incorrect!";
      }
    }, 100);

    window.setTimeout(function() {
      loadNewQuestion();
    }, 1300);
  }

  if (total == 10) {
    winLevel();
    resetLevel();
    correctButton();
  } // if
} // markIt

// get rgb code and convert to Hex.
// Thanks to Nathan for helping me with this function
function convertToHex(rgb) {
  let one = rgb.split("(");
  let two = one[1].split(")");
  let three = two[0].split(", ");

  let part1 = Number(three[0]).toString(16);
  if (part1.length == 1) part1 = "0" + part1;

  let part2 = Number(three[1]).toString(16);
  if (part2.length == 1) part2 = "0" + part2;

  let part3 = Number(three[2]).toString(16);
  if (part3.length == 1) part3 = "0" + part3;

  return "#" + part1 + part2 + part3;
} // convertToHex

// tell user they won, and reset to next level
function winLevel() {
  if (level < maxLevel) {
    level++;
  }

  console.log("Won level " + level);
  score = total = 0;
} // winLevel

// load a new question
function loadNewQuestion() {
  // set color of colorsample
  let colorCode = getRandomHexCode();
  colorSample.innerHTML = "";

  if (mode == 1) {
    colorSample.style.backgroundColor = colorCode;

    // pick a random location for correct answer
    let solution = Math.floor(Math.random() * ansAmount);
    for (let i = 0; i < answers.length; i++) {
      if (i == solution) {
        answers[i].innerHTML = colorCode;
      } else {
        answers[i].innerHTML = getRandomHexCode();
      } // else if
    } // for
  } // if

  if (mode == 2) {
    let solution = Math.floor(Math.random() * ansAmount);
    document.getElementById("hexDisplay").innerHTML = colorCode + "";

    for (let i = 0; i < answers.length; i++) {
      if (i == solution) {
        answers[i].style.backgroundColor = colorCode;
      } else {
        answers[i].style.backgroundColor = getRandomHexCode();
      } // else if
    } // for
  } // if

  // store correct answer to this question globally
  correctColorCode = colorCode;
} // loadNewQuestion

// create random hex code
function getRandomHexCode() {
  let result = []; // final code
  let hexRef = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f"
  ];
  result.push("#");

  for (let n = 0; n < 6; n++) {
    result.push(hexRef[Math.floor(Math.random() * 16)]);
  }

  return result.join(""); // #rrggbb
} // getRandomHexCode
