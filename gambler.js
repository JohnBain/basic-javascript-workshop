var counter = 4;
var answer = Math.floor((Math.random() * 100) + 1);

while (counter > 0) {
    
    var guess = window.prompt("Guess the number");
    
    if (guess === answer){
        window.alert("You got the right answer");
        break;
    }
    
    window.alert("Guess again")
    counter -= 1;
        
    }
