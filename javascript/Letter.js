// constructor function to display underlying letters or placeholders for game word
function Letter(underCharacter) {

//store underlying character for letter
  this.underCharacter = underCharacter;
//has letter been guessed or not
  this.letterGuessed = false;
//returns underlying character OR underscore as placeholder depending on if letter guessed or not
  this.renderLetter = function () {
      if (this.letterGuessed) {
        console.log(this.underCharacter)
        return this.underCharacter;
      }
      else {
        console.log("_");
        return "_";
      }
  };
//takes character as argument and checks against underlying character
  this.checkChar = function (guessedCharacter) {
    if (guessedCharacter === this.underCharacter) {
      this.letterGuessed = true;
    }
  }
};

// let testConstructFalse = new Letter("a");
// testConstructFalse.checkChar("b");
// testConstructFalse.renderLetter();
// console.log(testConstructFalse.letterGuessed);

// let testConstructTrue = new Letter("a");
// testConstructTrue.checkChar("a");
// testConstructTrue.renderLetter();
// console.log(testConstructTrue.letterGuessed);

module.exports = Letter;



