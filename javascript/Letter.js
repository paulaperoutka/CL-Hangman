//constructor function that also takes in user input
function Letters = function(userLetter) {
	this.letter = userLetter;
	this.correctGuess = false;

	this.renderLetter = function () {
//read spaces as "correct"  and render
		if (this.letter === " "){
      this.correctGuess = true;
      return " ";
		}
//if guess is incorrect return underscore
		if (this.correctGuess === false){
		  return "_ ";
		} 
//else return the user's correct guess/underlying letter
		else {
			this.correctGuess = true;
			return this.letter;
		}
	};
};

module.exports = Letter;
