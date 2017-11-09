// will show if the letter is a blank or a value chosen by the user
//pass in letter into function


var letter = function(let){
	this.charac = let;
	this.appear = false;
	this.letterRender = function(){
		return !(this.appear) ? "_" : this.charac;
	};
};


//export the constructor
module.exports = letter;