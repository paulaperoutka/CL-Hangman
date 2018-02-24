// WANTED TO ADD: 
// FS to read a word file
// Draw the hangman with symbols?? __________\n |-0

const inquirer = require("inquirer");
const Word = require("./assets/javascript/Word.js");
// ADD FS FOR READING A WORD FILE
//const fs = require('fs');

let wordList = ["tree", "bird", "spring", "sun"]

let guessesRemaining = 10,
  //empty array to hold incorrect letters
let incorrectLetters = [],

function startGame () {
  inquirer.prompt([{
      name: "play",
      type: "confirm", 
      message: "Would you like to play hangman?"
    }]).then(function(answer) {
      if(answer.play){
        newGame();
      }
      else {
        return "Me neither actually..."
      }
    })}
}

function newGame () {

  if(guessesRemaining === 10) {
    console.log("Let's begin!\n");

  let randomWord = wordList[Math.floor(Math.random() * wordList.length)];
  let playWord = new Word(randomWord);
//get underlying letters
  playWord.lettersToArray();
//convert word to string as placeholder or underscore
  playWord.wordString();
  continuePlay();
  }

  else{
    resetGame();
    newGame();
  }
}

function continuePlay () {
  inquirer.prompt ([{
    name: "letterInput",
    type: "input",
    message: "Typy any letter as a guess."
    //use inquirer validate?
  }]).then(function(response) {
    let userLetter = response.letterInput;

    //check letter guessed already

    //if guessed already, console log already guessed
      //repeat continuePlay();

    //else not guessed already
      //run letterFound function from Word to see if it is in the playWord

        //if not in playWord, push to incorrectLetters
          //run wordString to display the same word with placeholders
          // remainingGuesses--

        //if in word, run wordString() to display the updated word with placeholders


    //add check for whether playWord.length has been met, and then prompt to replay:
      // if playWord not found && guessesRemaining > 0, continuePlay();

      //else remaining guesses < 10, prompt to replay

  }};
};

function resetGame () {

  if (incorrectLetters.length > 0) {
    incorrectLetters = [];
  }
  if(guessesRemaining <10) {
      guessesRemaining = 10;
  }
};


startGame();

