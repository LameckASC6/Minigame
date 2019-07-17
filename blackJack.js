let yourCards = [];
let yourCardsCheck = [];
let results;
function getCards(n){
    for (i = 0; i < n; i ++){
        let cards = ["A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
        let answerCheck = [11, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10];
        let cardSelector = Math.floor(Math.random()*13);
        let yCards = cards[cardSelector];
        let yCardsCheck = answerCheck[cardSelector];
        yourCardsCheck.splice(yourCardsCheck.length, 0, yCardsCheck);
        yourCards.splice(yourCards.length, 0, yCards);
    }
    results = yourCardsCheck.reduce((a, b) => a + b, 0)
    if (results == 21){
        console.log("You Won");
    } else if (results > 21){
        console.log("You Broke, Better Luck Next Time");
    } else {
        console.log("Close, But Not Good Enough");
    }
    console.log(results);
    return yourCards;

}

console.log("Whats your name?");
let name = require('prompt');
name.start();
name.get(['name'], function (err, result){
    console.log("Good evening " + result.name + ", Are you ready to play?");
    let userName = result.name;
    let game = require('prompt');
    game.start()
    game.get(['answer'], function (err, result){
    console.log("Great " + userName + ", here are your cards.");
    console.log(getCards(2));
        console.log(userName + ", do you want to hit or stay?");
        let gameHit = require('prompt');
        gameHit.start();
        gameHit.get(['goOn'], function(err, result){
            let goOn = result.goOn;
            if (result.goOn == "stay"){
                console.log(yourCards);
                if (result == 21){
                    console.log("You Won");
                } else if (results > 21){
                    console.log("You Broke, Better Luck Next Time");
                } else {
                    console.log("Close, But Not Good Enough");
                }
                return; 
            } else if (result.goOn == "hit"){
                    console.log(getCards(1));
                    for (let i = 0; i < 1; i++){
                        console.log (userName + ", do you want to 'hit' again, or stay?");
                        let gameAgain = require('prompt')
                        gameAgain.start()
                        gameAgain.get(['again'], function (err, result){
                            if (result.again == "stay"){
                                console.log(yourCards);
                                goOn = "stay";
                                if (result == 21){
                                    console.log("You Won");
                                } else if (results > 21){
                                    console.log("You Broke, Better Luck Next Time");
                                } else {
                                    console.log("Close, But Not Good Enough");
                                }
                                return;
                            } else if (result.again == "hit"){                                   
                                    console.log(getCards(1));
                                    goOn = "hit";
                            } else {
                                console.log("Please, reply with 'stay' or 'hit', and do not use other terminology");
                            }
                            });
                    }
                } else {
                        console.log("Please, reply with 'stay' or 'hit', and do not use other terminology");
                    }
        });
    });
});