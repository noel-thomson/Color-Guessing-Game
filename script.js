// -- DOM Variables -- //

var squares = document.querySelectorAll(".square");
var displayChosen = document.getElementById("chosenColor");
var displayMessage = document.getElementById("message");
var header = document.querySelector("h1");

// -- Init, set Global Vars, Display Results -- //

var easyMode = false;
var colors = generateColorsArr(6);
setSquareColors();
var chosenColor = chooseColor();
displayChosen.textContent = chosenColor;

// -- Generate Colors -- //

function generateColorsArr(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    generateColor();
    arr.push(generateColor());
  }
  return arr;
}

function generateColor() {
  var n1 = Math.floor(Math.random() * 256);
  var n2 = Math.floor(Math.random() * 256);
  var n3 = Math.floor(Math.random() * 256);
  var color = "rgb(" + n1 + ", " + n2 + ", " + n3 + ")";
  return color;
}

// -- Set Squares to Colors -- //

function setSquareColors() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style["background-color"] = colors[i];
  }
}

// -- Choose Random Color from Colors Arr -- //

function chooseColor() {
  num = Math.floor(Math.random() * colors.length);
  return colors[num];
}

// -- Squares[i] ELs: Var clickedColor, Evaluation, Display, Tasks -- //

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", function() {
      var clickedColor = this.style["background-color"];
      if(clickedColor === chosenColor) {
        displayMessage.textContent = "Success!";
        correctChoice(chosenColor);
      } else {
        this.style["background-color"] = "#232323";
        displayMessage.textContent = "Try Again!";
      }
  });
}

// -- Squares[i] EL True: Tasks -- //

function correctChoice(chosenColor) {
  header.style["background-color"] = chosenColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style["background-color"] = chosenColor;
    reset.textContent = "Play Again?";
  }
}

// -- Reset EL: Evaluation, Tasks -- //

reset.addEventListener("click", function() {
  if(easyMode) {
    colors = generateColorsArr(3);
    buttonTasks();
  } else {
    colors = generateColorsArr(6);
    buttonTasks();
  }
});

//-- Easy/Hard ELs: Tasks, Display -- //

easy.addEventListener("click", function() {
  easyMode = true;
  easy.classList.add("selected");
  hard.classList.remove("selected");
  colors = generateColorsArr(3);
  buttonTasks();
  displayMessage.textContent = "Easy Mode";
});

hard.addEventListener("click", function() {
  easyMode = false;
  hard.classList.add("selected");
  easy.classList.remove("selected");
  colors = generateColorsArr(6);
  buttonTasks();
  displayMessage.textContent = "Hard Mode";
});

// -- Button Tasks: Display, Tasks, Evaluation -- //

function buttonTasks() {
  header.style["background-color"] = "steelblue";
  displayMessage.textContent = "(Red, Green, Blue)";
  reset.textContent = "Reset Colors";
  setSquareColors();
  chosenColor = chooseColor();
  displayChosen.textContent = chosenColor;
  if(easyMode) {
    for (var i = 3; i < squares.length; i++) {
      squares[i].style.display = "none";
    }
  } else {
    for (var j = 3; j < squares.length; j++) {
      squares[j].style.display = "block";
    }
  }
}

// // -- JS Create DOM Elements -- //
//
// function createSquares() {
//   for (var i = 0; i < colors.length; i++) {
//     createSquare();
//   }
// }
//
// function createSquare() {
//   var node = document.createElement("div");
//   node.setAttribute("class", "newSquare");
//   document.querySelector(".container").appendChild(node);
// }
