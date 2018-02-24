const Letter = require("./Letter.js");

function Word (wordFromList) {
	this.currentWord = wordFromList;
  this.wordLetters = [];
//array of letter object representing the letters of underlying word
  this.lettersToArray = function(){
    let splitWord = this.currentWord.split("");
    // console.log(splitWord);
    for(var i = 0; i<splitWord.length; i++){
      var newLetter = new Letter(splitWord[i]);
      this.wordLetters.push(newLetter);
    }
    // console.log(this.wordLetters);
  };
//function that returns string representing words, call first letters function
  this.wordString = function () {
  	let letterGuesses = ""; 
  	for (var j = 0; j<this.wordLetters.length; j++) {
  		letterGuesses += this.wordLetters[j].renderLetter();
  	}
  	//this isn't working either
  	// letterGuesses.toString();
  	return letterGuesses;
  };
 // function taking character arg and calls second letters function
 	this.letterFound = function (guessedLetter) {
 		// console.log(this.wordLetters);
 		for (var k = 0; k<this.wordLetters.length; k++) {
 			let thisLetter = this.wordLetters[k].underCharacter;
 			console.log(thisLetter);
//checkChar not working when I try to use the object data unless I use this.wordLetters, but then how do I access inner data? 			
 			thisLetter.checkChar(guessedLetter);
 		}
 	};
};

// let testConstruct = new Word("hello");
// testConstruct.lettersToArray();
// testConstruct.wordString();

//this last one has error ar checkChar
// testConstruct.letterFound("h");

module.exports = Word;

