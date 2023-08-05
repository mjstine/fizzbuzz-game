function getUserInput(){
    let userInput = prompt('Please enter the number you would like to FizzBuzz up to: ');
    if(userInput === null) {
        return;
    }

    if(userInput === '') {
        alert('To start playing, please enter a number in the text box.');
        return getUserInput();
    }

    userInput = parseInt(userInput);
    if(validateUserInput(userInput)) {
        return userInput;
    }

}

function validateUserInput(userInput){
    if(isNaN(userInput)){
        alert('Please enter a number only. Letters and special characters are not allowed.');
        return getUserInput();
    }

    if(userInput <= 0){
        alert('Please enter a number from one and above.');
        return getUserInput();
    }

    return true;
}

function startFizzBuzz(userInput) {
    let arrFizzBuzz = [];
    for(let i = 1; i <= userInput; i++){
        
        if(i % 3 === 0 && i % 5 !== 0){
            arrFizzBuzz.push('Fizz');
            continue;
        }
        if(i % 5 === 0 && i % 3 !== 0){
            arrFizzBuzz.push('Buzz');
            continue;
        }
        if(i % 3 === 0 && i % 5 === 0){
            arrFizzBuzz.push('FizzBuzz');
            continue;
        }

        arrFizzBuzz.push(i);
    }

    return arrFizzBuzz;
}

function startGame(){
    return startFizzBuzz(getUserInput());
}

console.log(startGame());