// GLOBAL VARIABLES (accessible by all functions)
// ==================================================================================================

/* eslint-disable */

// Array of Word Options (all lowercase).
var wordsList = [
    {
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
// Library found here https://www.endocrineweb.com/conditions/diabetes/diabetes-glossary

// Display the definition of word after the game is over?

var chosenObject = "";

// Computer selected solution will be held here.
var chosenWord = "";

var definition = "";

// This will break the solution into individual letters to be stored in array.
var lettersInChosenWord = [];

// This will be the number of blanks we show based on the solution.
var numBlanks = 0;

// Holds a mix of blank and solved letters (ex: 'n, _ _, n, _').
var blanksAndSuccesses = [];

// Holds all of the wrong guesses.
var wrongGuesses = [];

// Holds the letters guessed
var letterGuessed = "";

// Game counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

// FUNCTIONS (These are bits of code that we will call upon to run when needed).
// ==================================================================================================

// startGame()
// It's how we we will start and restart the game.
// (Note: It's not being run here. Function declarations like this are made for future use.)
function startGame() {

  // Reset the guesses back to 0.
  numGuesses = 9;

  // Solution chosen randomly from wordList.
  chosenObject = wordsList[Math.floor(Math.random() * wordsList.length)];

  chosenWord = chosenObject.word;

  definition = chosenObject.def;

  // The word is broken into individual letters.
  lettersInChosenWord = chosenWord.split("");

  // We count the number of letters in the word.
  numBlanks = lettersInChosenWord.length;

  // We print the solution in console (for testing).
  console.log(chosenWord);

  // CRITICAL LINE
  // Here we *reset* the guess and success array at each round.
  blanksAndSuccesses = [];

  // CRITICAL LINE
  // Here we *reset* the wrong guesses from the previous round.
  wrongGuesses = [];

  // Fill up the blanksAndSuccesses list with appropriate number of blanks.
  // This is based on number of letters in solution.
  for (var i = 0; i < numBlanks; i++) {
    blanksAndSuccesses.push("_");
  }

  // Print the initial blanks in console.
  console.log(blanksAndSuccesses);

  // Reprints the guessesLeft to 9.
  document.getElementById("guesses-left").innerHTML = numGuesses;

  // Prints the blanks at the beginning of each round in the HTML.
  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");

  // Clears the wrong guesses from the previous round.
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
}

// checkLetters() function
// It's where we will do all of the comparisons for matches.
// Again, it's not being called here. It's just being made for future use.
function checkLetters(letter) {

  // This boolean will be toggled based on whether or not
  // a user letter is found anywhere in the word.
  var letterInWord = false;

  // Check if a letter exists inside the array at all.
  for (var i = 0; i < numBlanks; i++) {

    if (chosenWord[i] === letter) {

      // If the letter exists then toggle this boolean to true.
      // This will be used in the next step.
      letterInWord = true;
    }
  }

  // If the letter exists somewhere in the word,
  // then figure out exactly where (which indices).
  if (letterInWord) {

    // Loop through the word
    for (var j = 0; j < numBlanks; j++) {

      // Populate the blanksAndSuccesses with every instance of the letter.
      if (chosenWord[j] === letter) {

        // Here we set specific blank spaces to equal the correct letter
        // when there is a match.
        blanksAndSuccesses[j] = letter;
      }
    }

    // Log the current blanks and successes for testing.
    console.log(blanksAndSuccesses);
  }

  // If the letter doesn't exist at all...
  else {

    // Then we add the letter to the list of wrong letters.
    wrongGuesses.push(letter);

    // We also subtract one of the guesses.
    numGuesses--;

  }

}

// roundComplete() function
// Here we will have all of the code that needs to be run after each guess is made.
function roundComplete() {

  // First, log an initial status update in the console
  // telling us how many wins, losses, and guesses are left.
  console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);

  // HTML UPDATES
  // ============

  // Update the HTML to reflect the new number of guesses.
  document.getElementById("guesses-left").innerHTML = numGuesses;

  // This will print the array of guesses and blanks onto the page.
  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");

  // This will print the wrong guesses onto the page.
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

  // If our Word Guess string equals the solution.
  // (meaning that we guessed all the letters to match the solution)...
  if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {

    // Add to the win counter
    winCounter++;

    // Give the user an alert
    alert("You win!" + " " + "Defintion:" + definition);
    // CHANGE TO MODEL

    // Update the win counter in the HTML
    document.getElementById("win-counter").innerHTML = winCounter;

    // Restart the game
    startGame();
  }

  // If we've run out of guesses
  else if (numGuesses === 0) {

    // Add to the loss counter
    lossCounter++;

    // Give the user an alert
    alert("You lose"  + " " + "Defintion:" + definition);
    // CHANGE TO MODEL

    // Update the loss counter in the HTML
    document.getElementById("loss-counter").innerHTML = lossCounter;

    // Restart the game
    startGame();

  }

}

// MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
// ==================================================================

// Starts the Game by running the startGame() function
startGame();

// Then initiates the function for capturing key clicks.
document.onkeyup = function(event) {

  // Converts all key clicks to lowercase letters.
  letterGuessed = String.fromCharCode(event.which).toLowerCase();

  // Runs the code to check for correct guesses.
  checkLetters(letterGuessed);

  // Runs the code that ends each round.
  roundComplete();
};
