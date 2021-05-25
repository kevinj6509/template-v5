function helloworld() {
  changeVisiblility("gradient");
  document.getElementById("content").innerHTML =
    "<object id='object' type='text/html' data='' ></object>";
  document.getElementById("content").innerHTML =
    "<object id='object' type='text/html' data='/external/CompProg11/HelloWorld/helloWorld.html' ></object>";
}

function quiztemplate() {
  changeVisiblility("gradient");
  document.getElementById("content").innerHTML =
    "<object id='object' type='text/html' data='' ></object>";
  document.getElementById("content").innerHTML =
    "<object id='object' type='text/html' data='/external/CompProg11/QuizTemplate/QuizProject.html' ></object>";
}

function translator() {
  changeVisiblility("gradient");
  document.getElementById("content").innerHTML =
    "<object id='object' type='text/html' data='' ></object>";
  document.getElementById("content").innerHTML =
    "<object id='object' type='text/html' data='/external/CompProg11/translator/public/index.html' ></object>";
}

function weather() {
  changeVisiblility("gradient");
  document.getElementById("content").innerHTML =
    "<object id='object' type='text/html' data='' ></object>";
  document.getElementById("content").innerHTML =
    "<object id='object' type='text/html' data='/external/CompProg11/weather/public/index.html' ></object>";
}

function changeVisiblility(divID) {
  document.getElementById("gradient").style.background = "white";
}
