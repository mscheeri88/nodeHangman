//`main.js` will contain the logic of your app. Running it in Terminal/Bash will start the game.
var Word = require('./WordA.js'); //now allowed to use methods created in word constructor
var prompt = require('prompt');

console.log("Hey you wanna hang.....man!?");
console.log("Guess just one letter of cool Chicago Sports Teams");
console.log("-----------------------------");
prompt.start();


game = {   //game object
	//array of options to choose from
 	guessOption: ['bulls', 'bears', 'blackhawks', 'whitesox' , 'cubs'],
 	wordsWon: 0,
 	guessRemain: 10,
	pickedWord: null,
 	
 	startGame: function (wo) {
		 this.resetGuesses();
		 //passing new word to word constructor
		 this.pickedWord
		 //randomly selecting the word from the array guessOption
		  = new Word(this.guessOption[Math.floor(Math.random()* this.guessOption.length)]);
		 this.pickedWord
		 .getLet();
 		this.promptUser();
 	},

 	resetGuesses: function(){
		//resets guesses to 10;
 		this.guessRemain = 10;
 	},

 	promptUser: function(){
 		var self = this;
 		prompt.get(['guessLetter'], function(err, result){
 			console.log("You guessed: " + result.guessLetter);
			 var manyGuessed = self.pickedWord
			 .checkLetter(result.guessLetter);

 			if(manyGuessed ==0) {
 				console.log("WRONG");
				 self.guessRemain--;
				 //if we have yet to guess the "picked word" from the array, our guesses remain will decrease
 				
 			} else {
 				console.log("CORRECT");
					 if(self.pickedWord
						.findWord()){
							// if you selected the correct word, show you won and display the word that was picked
 						console.log("You won! You Guessed:", self.pickedWord
						 .wordRender());
 						console.log("-------------------");
						 return;
						 
 					}
 			}

 			console.log("Guesses remaining: " + self.guessRemain);
 			console.log("-------------------");
			 if((self.guessRemain > 0) && (self.pickedWord
				.found == false)){
				 self.promptUser();
				 //continue to prompt the user if the guesses are incorrect
 			}
 			else if(self.guessRemain ==0){
				 console.log("Game over. Correct Word ", self.pickedWord
				 .wordRender());
				 //once guesses are equal to 0, game over and show the correct word looking for
 			} else {
				 console.log(self.pickedWord
					.wordRender());
 			}
 		});

 	}


};

game.startGame();