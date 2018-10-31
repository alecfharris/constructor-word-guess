// Get the word constructor and inquirer
word = require("./Word.js");
inquirer = require('inquirer');

// Create a list of words
wordList = ['titan', 'art', 'machine', 'manuever', 'grim', 'reminder', 'colossal', 'attack', 'female', 'armored', 'beast', 'warhammer', 'jaw', 'founding', 'cartman'];

// Randomly select a word
function selectWord() {
    var number = Math.floor(Math.random() * wordList.length);
    var selectedWord = new word.Word(wordList[number]);
    return selectedWord;
}



// Displays word as either _ or letters depending on guess state
function displayWord(wordToDisplay) {
    var displayedWordArray = [];
    for (i = 0; i < wordToDisplay.array.length; i++) {
        displayedWordArray.push(wordToDisplay.array[i].letterDisplay());
    }
    return displayedWord = displayedWordArray.join(" ");
}


// Checks if word is complete to end the loop
function isWordComplete(wordToCheck) {
    // Make value start at true so it can later be changed to false if need be
    var wordComplete = true;
    var count = 0;
    // Check if there's any point to continue running
    while (wordComplete != false && count < wordToCheck.array.length) {
        // End process if needed
        if (wordToCheck.array[count].letterGuessed === false) {
            wordComplete = false;
        }
        count++;
    }
    // Gives a way to check whether the function has found that the word is complete
    return wordComplete;
}

// Checks if a guess is correct and logs that
function afterGuess(wordToCheck, guessToCheck){
    var correctGuess = false;
    // Checks for correct guess and updates word array
    for(i = 0; i < wordToCheck.array.length; i++) {
        wordToCheck.array[i].checkLetter(guessToCheck);
        if(wordToCheck.array[i].val === guessToCheck){
            correctGuess = true;
        }
    }
    // Logs out the word
    console.log('\n'+ displayWord(wordToCheck));
    // Logs whether guess was correct or incorrect
    if (correctGuess === true){
        console.log('\x1b[32m', "\nCORRECT!!!\n");
    }

    else{
        guessesRemaining--;
        console.log('\x1b[31m', "\nINCORRECT!!!\n")
        console.log('\x1b[37m', guessesRemaining + " guesses remaining!!!\n")
    }
}

// Variables needed to run game
var newWord = selectWord();
var guessesRemaining = 10;

var game = function () {
    wordCheck = isWordComplete(newWord);
    if (wordCheck === false && guessesRemaining > 0) {
        inquirer.prompt([
            {
                name: "guess",
                message: "Guess a letter!"

            },
        ]).then(function (answers) {
            afterGuess(newWord, answers.guess);
            wordCheck = isWordComplete(newWord);
            game();
        });
    }

    else{
        console.log('\x1b[37m', 'You got it right! Next word!\n')
        newWord = selectWord();
        guessesRemaining = 10;
        console.log(displayWord(newWord)+ '\n');
        game();
        
    }
}
console.log(displayWord(newWord) + '\n');
game();
