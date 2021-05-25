if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}

function translator() {
  document.getElementById("content").innerHTML =
    "<object id='object' type='text/html' data='' ></object>";
  document.getElementById("content").innerHTML =
    "<object id='object' type='text/html' data='/external/translator/public/index.html' ></object>";
}

function home() {
  document.getElementById("content").innerHTML =
    "<object id='object' type='text/html' data='' ></object>";
  document.getElementById("content").innerHTML =
    "<object id='object' type='text/html' data='index/index.html' ></object>";
}

function ict9() {
  document.getElementById("content").innerHTML =
    "<object id='object' type='text/html' data='' ></object>";
  document.getElementById("content").innerHTML =
    "<object id='object' type='text/html' data='/landing/ict9/index.html' ></object>";
}

function cp11() {
  document.getElementById("content").innerHTML =
    "<object id='object' type='text/html' data='' ></object>";
  document.getElementById("content").innerHTML =
    "<object id='object' type='text/html' data='/landing/compprog11/index.html' ></object>";
}

function cs11() {
  document.getElementById("content").innerHTML =
    "<object id='object' type='text/html' data='' ></object>";
  document.getElementById("content").innerHTML =
    "<object id='object' type='text/html' data='/landing/compsci11/index.html' ></object>";
}

function cp12() {
  document.getElementById("content").innerHTML =
    "<object id='object' type='text/html' data='' ></object>";
  document.getElementById("content").innerHTML =
    "<object id='object' type='text/html' data='/landing/compprog12/index.html' ></object>";
}

function bot() {
  document.getElementById("content").innerHTML =
   "<iframe src='https://discord.com/users/672625806970716171' title='W3Schools Free Online Web Tutorials'></iframe>";
}

