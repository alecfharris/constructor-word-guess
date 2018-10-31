 exports.Letter = function(val) {
    //Sets the value
    this.val = val;
    //Establishes if it has been guessed
    this.letterGuessed = false;

    //Changes the display based on guessed status
    this.letterDisplay = function(){
        if(!this.letterGuessed){
            return "_";
        }

        else{
            return this.val;
        }
    }
    //Checks if a guess is successful
    this.checkLetter = function(guess){
        if(guess === this.val){
            this.letterGuessed = true;
        }
    }
}