const Letter = require("./javascript/Letter.js");

let Word = function(gameWord){

  this.wordLetters = [];

  this.getLetter = function(gameWord){

    let splitWord = gameWord.split(" ");

    for (var i = 0; i < gameWord.length; i++) {
        this.wordLetters.push[i];
        console.log(this.wordLetters[i]);
      }

  }

}