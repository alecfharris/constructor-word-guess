// Uses Letter.js
letter = require("./Letter.js");

// Establish letter array
exports.Word = function(word) {
    this.word = word;
    this.array = [];
    // Populate array with the letters of the word
    for(var i = 0; i < this.word.length; i++){
        var newLetter = new letter.Letter(this.word.charAt(i));
        this.array.push(newLetter);
    }
    // Output word as a string
    this.logWord = function(){
        console.log(this.word);
    }
    // Check if a guessed letter is correct
    this.guess = function(guess){
        for (var i = 0; i < this.array.length; i++) {
            array[i].checkLetter(guess);
        }
    }
}