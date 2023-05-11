function Random() {
  
}


function guessGame(){
  var randomNumber = Math.floor(Math.random() * 100);
  var guess = prompt("Guess a number: ");
  
  

  while (guess != randomNumber) {
    if (randomNumber < guess) {
      guess = prompt("You've guessed too high! Keep guessing!");
    }
    else {
      guess = prompt("You've guessed too low! Keep guessing!");
    }
  }
  alert("Good Job!");
}

guessGame();
