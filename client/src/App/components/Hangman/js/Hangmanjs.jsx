
/* eslint-disable */

// Array of Words & Definitions
var wordsList = [{
    word: "antibodies",
    def: "Antibodies are specialized proteins that are part of the immune system. They are created when an antigen (such as a virus or bacteria) is detected in the body. The antibodies bond with the specific antigen that triggered their production, and that action neutralizes the antigen, which is a threat to the body. Antibodies are created to fight off whatever has invaded the body. See also autoantibodies."
  },
  {
    word: "antigens",
    def: "An antigen is a foreign substance (such as a virus or bacteria) that invades the body. When the body detects it, it produces specific antibodies to fight off the antigen."
  },
  {
    word: "autoantibodies",
    def: "Autoantibodies are a group of antibodies that “go bad” and mistakenly attack and damage the body’s tissues and organs. In the case of type 1 diabetes, autoantibodies attack the insulin producing beta cells in the pancreas."
  },
  {
    word: "carbohydrates",
    def: "Carbohydrates are one of the three main energy sources for the body (the others are fat and protein). Your body breaks down carbohydrates to get glucose, which then provides energy to the body."
  },
  {
    word: "fat",
    def: "Fat is an energy source for your body (the other two energy sources are carbohydrates and protein)."
  }
];
// Library & Options found here https://www.endocrineweb.com/conditions/diabetes/diabetes-glossary

// Variables:

var chosenObject = "";
var chosenWord = "";
var definition = "";
var lettersInChosenWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongGuesses = [];
var letterGuessed = "";
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

// Game Function

function startGame() {

  numGuesses = 9;

  chosenObject = wordsList[Math.floor(Math.random() * wordsList.length)];

  chosenWord = chosenObject.word;

  definition = chosenObject.def;

  lettersInChosenWord = chosenWord.split("");

  numBlanks = lettersInChosenWord.length;

  console.log(chosenWord);

  blanksAndSuccesses = [];

  wrongGuesses = [];

  for (var i = 0; i < numBlanks; i++) {
    blanksAndSuccesses.push("_");
  }

  console.log(blanksAndSuccesses);

  document.getElementById("guesses-left").innerHTML = numGuesses;

  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");

  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
}

function checkLetters(letter) {

  var letterInWord = false;

  for (var i = 0; i < numBlanks; i++) {

    if (chosenWord[i] === letter) {

      letterInWord = true;
    }
  }

  if (letterInWord) {

    for (var j = 0; j < numBlanks; j++) {

      if (chosenWord[j] === letter) {

        blanksAndSuccesses[j] = letter;
      }
    }

    console.log(blanksAndSuccesses);
  }

  else {

    wrongGuesses.push(letter);

    numGuesses--;

  }

}

function roundComplete() {

  console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);

  document.getElementById("guesses-left").innerHTML = numGuesses;

  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");

  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");


  if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {

    winCounter++;

    alert("You win!" + " " + "Defintion:" + definition);

    document.getElementById("win-counter").innerHTML = winCounter;

    startGame();
  }

  else if (numGuesses === 0) {

    lossCounter++;

    alert("You lose" + " " + "Defintion:" + definition);

    document.getElementById("loss-counter").innerHTML = lossCounter;

    // Restart the game
    startGame();

  }

}

startGame();

document.onkeyup = function (event) {

  letterGuessed = String.fromCharCode(event.which).toLowerCase();

  checkLetters(letterGuessed);

  roundComplete();
};