let warmUp = null; // warm up interval length
let highIntensity = null; // high intensity interval length
let lowIntensity = null; // low intensity interval length
let coolDown = null; // cool down interval length
let setAmount = null; // amount of sets
let lateTime = 0; // In seconds, automatically converted to minuites and seconds
let temp = null; // temporary variable for passing html content into permanent values
let timer = []; // array used to store all timer lengths
let label = []; // array used to store all interval lengths

// setup service worker
/*

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}

*/ // if

/* function modeSwitch (mode) {
  if (mode == 1) {
    document.getElementById("btn1").style.backgroundColor = "#008CBA";
    document.getElementById("btn1").style.color = "#ffffff";

    document.getElementById("btn2").style.backgroundColor = "#ffffff";
    document.getElementById("btn2").style.color = "#000000";

    document.getElementById("getTime2").style.display = "block";
    document.getElementById("getTime").style.display = "none";
  } // if

  if (mode == 2) {

    document.getElementById("btn2").style.backgroundColor = "#4CAF50";
    document.getElementById("btn2").style.color = "#ffffff";

    document.getElementById("btn1").style.backgroundColor = "#ffffff";
    document.getElementById("btn1").style.color = "#000000";

    document.getElementById("getTime2").style.display = "none";
    document.getElementById("getTime").style.display = "block";
  } // if
} */

// set basic warmup information
function preload() {
  // modeSwitch(1);
  label[0] = "Warm Up";
  timer[0] = "Not Set!";
  update();
} // preload

// when warmup submitted, store and update warmup display
function setWarmUp() {
  timer[0] = document.getElementById("warmUp2").value;
  label[0] = "Warm Up";
  update();
} // setWarmUp

// store submitted interval into arrays for labels and time
function addInterval() {
  timer.push(document.getElementById("intLength").value);
  label.push(document.getElementById("intName").value);
  update();
} // addInterval

// if user adds cooldown, store the data
function setCooldown() {
  timer.push(document.getElementById("cooldownDisplay").value);
  label.push("Cool Down");
  update();
} // setCoolDown

// run the workout. Switch displays then start timers
async function startWorkout() {
  // switch display to mode two
  toggleTimer2();

  // start workout at warmup
  startClock(0);
  temp = convert(timer[0]);

  next();
} // startWorkout

// run timers with a delay
async function next() {
  for (let i = 1; i < label.length; i++) {
    temp = convert(timer[i - 1]);

    // wait until previous counter is finished, then continue
    await sleep(temp * 1000).then(() => {
      startClock(i);
    }); // sleep
  } // for
} // next

// at correct intervals, update clock svg and run corresponding timer
function startClock(index) {
  document.getElementById("display").innerHTML = label[index];
  lateTime = convert(timer[index]);
  resetTimer();
  startTimer();
} // startClock

// refresh workout display
function update() {
  document.getElementById("workout").innerHTML = "";

  for (let i = 0; i < label.length; i++) {
    document.getElementById("workout").innerHTML +=
      "<br>" + label[i] + ": " + timer[i];
  } // for
} // update

// switch displays
function toggleTimer2() {
  document.getElementById("getTime2").style.display = "none";
  document.getElementById("timerContainer").style.display = "block";
  /* document.getElementById("btn2").style.display = "none";
  document.getElementById("btn1").style.display = "none"; */
} // toggleTimer


//------------------------------------------------------//
// code for mode 1. A lot of the code is reused for mode 2
//------------------------------------------------------//


// When submit button clicked, switch displays to timer and start timers
// mode 1 only
function toggleTimer() {
  // switch displays
  document.getElementById("getTime").style.display = "none";
  document.getElementById("timerContainer").style.display = "block";
  /* document.getElementById("btn2").style.display = "none";
  document.getElementById("btn1").style.display = "none"; */

  // get values from HTML
  temp = document.getElementById("warmUp").value;
  warmUp = convert(temp);

  temp = document.getElementById("highIntensity").value;
  highIntensity = convert(temp);

  temp = document.getElementById("lowIntensity").value;
  lowIntensity = convert(temp);

  temp = document.getElementById("coolDown").value;
  coolDown = convert(temp);

  setAmount = document.getElementById("setAmount").value;

  // Add all elements into timer array
  timer.push(warmUp);
  for (let i = 0; i < setAmount; i++) {
    timer.push(highIntensity);
    timer.push(lowIntensity);
  } // for
  timer.push(coolDown);

  // run start warmup timer
  startWarmUp();

  // once warmup done, run sets timer
  setTimeout(startSets, parseInt(warmUp) * 1000);
} // toggleTimer

// convert entered time into seconds. Igonred if already in seconds
function convert(set) {
  let splice = null;

  if (set.includes(":")) {
    splice = set.split(":");
    set = parseInt(splice[0]) * 60 + parseInt(splice[1]);
  } // if
  return set;
} // convert

// start warm up timer
function startWarmUp() {
  document.getElementById("display").innerHTML = "Warm Up";
  lateTime = warmUp;
  resetTimer();
  startTimer();
} // startWarmUp

// start warm up timer
function startCoolDown() {
  document.getElementById("display").innerHTML = "Cool Down";
  lateTime = coolDown;
  resetTimer();
  startTimer();
} // startWarmUp

// switch between high and low intervals, for as long as set amount
async function startSets() {
  console.log("start high");

  startHighIntensity();

  if (setAmount > 1) {
    for (let i = 0; i < setAmount - 1; i++) {
      // wait until previous counter is finished, then continue
      await sleep(highIntensity * 1000).then(() => {
        startLowIntensity();
      });

      console.log("loop low");

      // wait until previous counter is finished, then continue
      await sleep(lowIntensity * 1000).then(() => {
        startHighIntensity();
      });

      console.log("loop high");
    } // for
  } // if

  console.log("end low");

  await sleep(highIntensity * 1000).then(() => {
    startLowIntensity();
  });

  await sleep(lowIntensity * 1000).then(() => {
    startCoolDown();
  });
} // startSets

function startLowIntensity() {
  document.getElementById("display").innerHTML = "Low Intensity Set";
  lateTime = lowIntensity;
  resetTimer();
  startTimer();
} // startLowIntensity

function startHighIntensity() {
  document.getElementById("display").innerHTML = "High Intensity Set";
  lateTime = highIntensity;
  resetTimer();
  startTimer();
} // startHighIntensity

// clear old svg, reset clock variables
function resetTimer() {
  clearInterval(timerInterval);
  TIME_LIMIT = lateTime;
  timePassed = 0;
  timeLeft = TIME_LIMIT;
  timerInterval = 0;
  remainingPathColor = COLOR_CODES.info.color;

  document.getElementById("app").innerHTML = `
    <div class="base-timer">
      <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g class="base-timer__circle">
          <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
          <path
            id="base-timer-path-remaining"
            stroke-dasharray="283"
            class="base-timer__path-remaining ${remainingPathColor}"
            d="
              M 50, 50
              m -45, 0
              a 45,45 0 1,0 90,0
              a 45,45 0 1,0 -90,0
            "
          ></path>
        </g>
      </svg>
      <span id="base-timer-label" class="base-timer__label">${formatTime(
        timeLeft
      )}</span>
    </div>
  `;
} // restTimer

//-----------------------------------------------------------------------------------------------------//
// Code for timer (animated svg)
// copied code! ALL credits to Mateusz Rybczonec
// Source: https://css-tricks.com/how-to-create-an-animated-countdown-timer-with-html-css-and-javascript/

// variables for css animation
const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

// keyframes for css amimations
const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

// initialize viarables, given value later on
let TIME_LIMIT = null;
let timePassed = null;
let timeLeft = null;
let timerInterval = null;
let remainingPathColor = null;

// initialize SVG circle
document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;

// if time is up, stop interval
function onTimesUp() {
  clearInterval(timerInterval);
} // onTimes Up

// start the loop for the timer
function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
} // startTimer

// change milliseconds to mm:ss format
function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
} // formatTime

// update svg color
function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
} // setRemainingPathColor


function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}

//--------------------------------------------------------------------------------------------//
// Copied sleep function from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
// sleep time expects milliseconds
function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
