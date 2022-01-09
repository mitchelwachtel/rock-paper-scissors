var game = function(userChoice) {
    
    var compChoice = Math.floor(Math.random()*3);
    
    if (compChoice === 0) {
        compChoice = 'R';
    } else if (compChoice === 1) {
        compChoice = 'P';
    } else if (compChoice === 2) {
        compChoice = 'S';
    }
    // Last 'else if' could be changed to simply 'else'
    
    var result = '';

    if (compChoice == userChoice) {
       result = 'Tie!';
    } else if (compChoice == 'R') {
        if (userChoice == 'S') {
            result = 'Computer Wins!'
        } else if (userChoice == 'P') {
            result = 'User Wins!'
        }
    } else if (compChoice == 'P') {
        if (userChoice == 'R') {
            result = 'Computer Wins!'
        } else if (userChoice == 'S') {
            result = 'User Wins!'
        }
    } else if (compChoice == 'S') {
        if (userChoice == 'P') {
            result = 'Computer Wins!'
        } else if (userChoice == 'R') {
            result = 'User Wins!'
        }
    } 

    return result;
};

console.log(game('S'));
