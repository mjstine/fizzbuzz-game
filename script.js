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