


var letter = require('./LetterA.js');

function Word(target) {
	this.target = target;
	this.letters = [];
	this.found = false;

	this.getLet = function() {
		for (var i=0; i < this.target.length; i++) {
			this.letters.push( new letter(this.target[i]));
			//take chosen word, separate into letters within an array
		}
	};

	this.findWord = function() {
		this.found = this.letters.every(function(currentLetter) {
			return currentLetter.appear;
		});
		return this.found;
	};

	this.checkLetter = function(guessLetter) {
		var toReturn = 0;  //we are only returning this value to main js.


		//if any character in the guessed letter is chosen
		for (var i = 0; i < this.letters.length; i++) {
			if (this.letters[i].charac == guessLetter){
				this.letters[i].appear = true;
				//appear goes through the array and flips boolean to true
				toReturn++;
				//add one
			}
		}
		return toReturn;
	};

	this.wordRender = function() {
		var string = '';
		//empty string variable
		for (var i=0; i < this.letters.length; i++){
			string += this.letters[i].letterRender();
			//loop and add selected letter to a string to form the guessed word
		}
		return string;
	};

}

module.exports = Word;
