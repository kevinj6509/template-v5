var currentQuestion = 0;
var score = 0;
var clicked = false;
var win = false;

var questions = [
  {
    question: "1. What pickaxe do you need to mine diamond ore?",
    a: "Wooden pickaxe",
    b: "Iron pickaxe",
    c: "Obsidian pickaxe",
    d: "stone pickaxe",
    image: "quizimages/diamond.jpg",
    answer: "b"
  },
  {
    question: "2. What are creepers afraid of?",
    a: "The Dark",
    b: "Pigs",
    c: "Ocelots",
    d: "Spiders",
    image: "quizimages/Creep.jpg",
    answer: "c"
  },
  {
    question: "3. What animal was recorded to produce the sounds for Ghasts?",
    a: "A Cat",
    b: "A Dog",
    c: "A Ghost",
    d: "A Parrot",
    image: "quizimages/ghast.png",
    answer: "a"
  },
  {
    question: "4. How do you make obsidian?",
    a: "Water on lava",
    b: "Lava on water",
    c: "A and B",
    d: "Neither",
    image: "quizimages/mc.jpg",
    answer: "a"
  },
  {
    question: "5. When did Minecraft come out?",
    a: "19 June 2011",
    b: "17 May 2011",
    c: "17 May 2009",
    d: "19 June 2009",
    image: "quizimages/dmc.jpg",
    answer: "c"
  },
  {
    question: "6. What was the Minecraft's first name?",
    a: "Mine and Craft",
    b: "Notch",
    c: "Steve's Bizzare Adventure",
    d: "Cave Game",
    image: "quizimages/wee.jpg",
    answer: "d"
  },
  {
    question: "7. Who is the original creator of Minecraft?",
    a: "Donald Trump",
    b: "JFK",
    c: "Bob Ross",
    d: " Markus Persson",
    image: "quizimages/cree.jpg",
    answer: "d"
  },
  {
    question:
      "8. What coordiantes are the best to go to, if you want to find dimonds?",
    a: "Y: 5-16",
    b: "X: 5-16",
    c: "Y: 7-22",
    d: "X: 7-22",
    image: "quizimages/ghast.png",
    answer: "a"
  },
  {
    question: "9. When did Microsoft buy Mojang?",
    a: "15 September 2017",
    b: "15 September 2014",
    c: "15 November 2017",
    d: "15 November 2014",
    image: "quizimages/clippy.jpg",
    answer: "b"
  },
  {
    question: "10. How much did it cost for Microsoft to buy Mojang?",
    a: "2 Million",
    b: "20 Million",
    c: "2.5 Billion",
    d: "50 Thousand",
    image: "quizimages/aMoney.jpg",
    answer: "c"
  }
];

function load() {
  location.reload(true);
}

function loadQuestion() {
  if (currentQuestion >= questions.length - 1) {
    win = true;
  }
  clicked = false;
  document.getElementById("score").innerHTML =
    "Current Score: " +
    score +
    " , Question: " +
    (currentQuestion + 1) +
    " out of " +
    questions.length;

  next.className = "hidden";
  concl.className = "hidden";

  setWhite();

  document.getElementById("question").innerHTML =
    questions[currentQuestion]["question"];
  document.getElementById("a").innerHTML =
    "A.   " + questions[currentQuestion]["a"];
  document.getElementById("b").innerHTML =
    "B.   " + questions[currentQuestion]["b"];
  document.getElementById("c").innerHTML =
    "C.   " + questions[currentQuestion]["c"];
  document.getElementById("d").innerHTML =
    "D.   " + questions[currentQuestion]["d"];

  var img = document.getElementById("image");
  var preLoadImage = new Image();
  preLoadImage.src = questions[currentQuestion]["image"];
  preLoadImage.onload = function() {
    img.width = 400;
  };

  img.style.maxWidth = "500px";
  img.src = preLoadImage.src;
} // loadQuestion

function markIt(ans) {
  if (!clicked) {
    clicked = true;
    setWhite();

    if (ans == questions[currentQuestion]["answer"]) {
      score++;

      document.getElementById(ans).style.backgroundColor = "#8aeda4";
      document.getElementById("concl").style.backgroundColor = "#8aeda4";
      document.getElementById("concl").innerHTML = "Correct";
    } else {
      document.getElementById(
        questions[currentQuestion]["answer"]
      ).style.backgroundColor = "#ff8933";
      document.getElementById(ans).style.backgroundColor = "#db2e5c";
      document.getElementById("concl").style.backgroundColor = "#db2e5c";
      document.getElementById("concl").innerHTML =
        "Incorrect, the answer was " + questions[currentQuestion]["answer"];
    }
    document.getElementById("score").innerHTML =
      "Current Score: " +
      score +
      " , Question: " +
      (currentQuestion + 1) +
      " out of " +
      questions.length;
  }
  concl.className = "unhidden";
  if (!win) {
    next.className = "unhidden";
  }

  if (win) {
    clicked = true;
    if (score >= questions.length / 2) {
      document.getElementById("score").innerHTML =
        "You won with a score of " + (score / questions.length) * 100 + "%";
      document.getElementById("score").style.backgroundColor = "#8aeda4";
    } else {
      document.getElementById("score").innerHTML =
        "You lost with a score of " + (score / questions.length) * 100 + "%";
      document.getElementById("score").style.backgroundColor = "#db2e5c";
    }
    reloadC.className = "unhidden";
    document.getElementById("next").style.backgroundColor = "#d90d1b";
  }
} // markIt

function setWhite() {
  document.getElementById("a").style.backgroundColor = "white";
  document.getElementById("b").style.backgroundColor = "white";
  document.getElementById("c").style.backgroundColor = "white";
  document.getElementById("d").style.backgroundColor = "white";
}

function nextQuestion() {
  currentQuestion++;
  loadQuestion();
}
