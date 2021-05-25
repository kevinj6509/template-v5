// Declare Variables
var isOnline = null;
var url_ft2 = "";
var text;
var translatedText = "";
var BASE_URL2 = "";

function openNav() {
  document.getElementById("myNav").style.width = "100%";
  document.getElementById("myNav").style.display = "block";
  document.getElementById("closebtn").style.display = "block";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.getElementById("closebtn").style.display = "none";
}

// List of all languages, Used to change default language
var langA = [
  "yoda",
  "pirate",
  "valspeak",
  "minion",
  "ferblatin",
  "piglatin",
  "dothraki",
  "sindarin",
  "quenya",
  "orcish",
  "sith",
  "cheunh",
  "gungan",
  "mandalorian",
  "huttese",
  "chef",
  "catalan",
  "oldenglish",
  "shakespeare",
  "vulcan",
  "klingon",
  // "romulan",
  //"dovahzul",
  //"thuum",
  // "aldmeris",
  "groot",
  // "wakandan",
  "jive"
];

// set and select a default language
var select = langA[0];

// Reset the title and current language
function setup() {
  document.getElementById("translated").style.color = "black";

  // Get Current translator, and change first letter to Capital for the title, and update title
  var lttr = select.split("");
  var charlttr = lttr[0].toUpperCase(lttr[0]);
  lttr[0] = "";
  lttr = charlttr + lttr.toString();

  for (var i = 0; i < lttr.length; i++) {
    lttr = lttr.replace(",", "");
  } // for

  document.getElementById("lang").innerHTML = lttr;
  BASE_URL2 =
    "https://api.funtranslations.com/translate/" + select + ".json?text=";
} // setup

// Get the JSON from
function getJSON() {
  fetch(url_ft2)
    .then(resp => resp.json()) // Transform the data into json
    .then(function(data) {
      // display translation
      document.getElementById("translated").innerHTML =
        data.contents.translated;
    })
    .catch(function(error) {
      document.getElementById("translated").innerHTML =
        "Error with Fun Translations: " + error;
      document.getElementById("translated").style.color = "red";
    });
} // getJSON

//
function check() {
  // check if app has connection to the internet
  isOnline = navigator.onLine;
  // loader();

  setup();

  text = document.getElementById("textForm").elements.text.value;

  for (var i = 0; i < text.length; i++) {
    text = text.replace(" ", "%20");
  } // for

  url_ft2 = BASE_URL2 + text;

  if (isOnline == true) {
    getJSON();
  } else {
    changeVisiblility("mOffline");
  } // else
} // check

// Allows You to Toggle Visibility
function changeVisiblility(divID) {
  var element = document.getElementById(divID);

  // if element exists, it is considered true
  if (element) {
    element.className = element.className == "hidden" ? "unhidden" : "hidden";
  } // if
} // changeVisibility

function hideLoader() {
  changeVisiblility("mOffline");
} // hideLoader

function setLang(lang) {
  select = langA[lang];

  setup();

  document.getElementById("myNav").style.display = "none";
}
