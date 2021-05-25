var getDate = new Date();
var d = new Date();

function date1() {
  document.getElementById("display").innerHTML = Date();
}

function date2() {
  document.getElementById("display").innerHTML = getDate.getFullYear();
}

function date3() {
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  document.getElementById("display").innerHTML = months[d.getMonth()];
}

function date4() {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  document.getElementById("display").innerHTML = days[d.getDay()];
}

function date5() {
  document.getElementById("display").innerHTML =
    getDate.getHours() + ":" + getDate.getMinutes();
}
