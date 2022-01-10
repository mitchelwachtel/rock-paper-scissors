var game = function () {
    
   
  
    var userWins = 0;
    var compWins = 0;
    var ties = 0;

    // onePlay is one round output is tie, comp, or user
  var onePlay = function () {
    var userChoice = prompt("Input R, P, or S", " ");
    var compChoice = Math.floor(Math.random() * 3);

    if (compChoice === 0) {
      compChoice = "R";
    } else if (compChoice === 1) {
      compChoice = "P";
    } else if (compChoice === 2) {
      compChoice = "S";
    }
    // Last 'else if' could be changed to simply 'else'

    var result = "";
    
    if (userChoice != 'R' && userChoice != 'P' && userChoice != 'S') {
        alert('You must input R, P, or S');
    }

    if (compChoice == userChoice) {
      result = "tie";
      alert('Tie!');
    } else if (compChoice == "R") {
      if (userChoice == "S") {
        result = "comp";
        alert('Computer Wins!');
      } else if (userChoice == "P") {
        result = "user";
        alert('User Wins!');
      }
    } else if (compChoice == "P") {
      if (userChoice == "R") {
        result = "comp";
        alert('Computer Wins!');
      } else if (userChoice == "S") {
        result = "user";
        alert('User Wins!');
      }
    } else if (compChoice == "S") {
      if (userChoice == "P") {
        result = "comp";
        alert('Computer Wins!');
      } else if (userChoice == "R") {
        result = "user";
        alert('User Wins!');
      }
    }

    count(result);
    
    if (confirm('User: ' + userWins + '\nComputer: ' + compWins + '\nTies: ' + ties + '\n \nPlay Again?') == true) {
        onePlay();
      } 

  };
  
  var count = function(result) {
      if (result == 'comp') {
          return compWins++;
      } else if (result == 'user') {
          return userWins++;
      } else if (result == 'tie') {
          return ties++;
      }
  }
  
  onePlay();
};

