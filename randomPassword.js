function randomPassword(passwordLength){
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let symbols = "!@#$%^&*()"
    let letterLength1 = Math.floor(Math.random()*passwordLength);
    let capitalLettersLength = Math.floor(Math.random()*letterLength1);
    let letterLength = letterLength1 - capitalLettersLength;
    let numberLength1 = passwordLength - letterLength1;
    let numberLength = Math.floor(Math.random()*numberLength1);
    let symbolsLength = numberLength1 - numberLength; 
    let password = [];

    for (let i = 0; i < letterLength; i++){
        let finalLetter1 = Math.floor(Math.random()*26);
        let finalLetter = letters[finalLetter1];
        let letterPlacement = Math.floor(Math.random()*passwordLength);
        password.splice(letterPlacement, 0, finalLetter);
    }

    for (let i = 0; i < capitalLettersLength; i++){
        let finalCapitalLetter1 = Math.floor(Math.random()*26);
        let finalCapitalLetter = capitalLetters[finalCapitalLetter1];
        let letterPlacement = Math.floor(Math.random()*passwordLength);
        password.splice(letterPlacement, 0, finalCapitalLetter);
    }

    for (let i = 0; i < numberLength; i++){
        let finalNumber = Math.floor(Math.random()* 10);
        let numberPlacement = Math.floor(Math.random()*passwordLength);
        password.splice(numberPlacement, 0, finalNumber);    
    }
    
    for (let i = 0; i < symbolsLength; i++){
        let finalSymbols1 = Math.floor(Math.random()* 10);
        let finalSymbols = symbols[finalSymbols1];
        let symbolsPlacement = Math.floor(Math.random()*passwordLength);
        password.splice(symbolsPlacement, 0, finalSymbols);
    }

    return password;
}
console.log(randomPassword(parseInt(process.argv[2])));