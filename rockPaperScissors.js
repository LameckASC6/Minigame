let choice = process.argv[2];
let ai = Math.ceil(Math.random()*3);

if (ai == 1){
    ai = "rock";

} else if (ai == 2){
    ai = "paper";

} else if (ai == 3){
    ai = "scissors";
}

if (ai == "rock" && choice == "rock"){
    console.log("rock");
    console.log("DRAW");

} else if (ai == "rock" && choice == "paper"){
    console.log("rock");
    console.log("YOU WON");

} else if (ai == "rock" && choice == "Scissors"){
    console.log("rock");
    console.log("YOU LOST");

} else if (ai == "paper" && choice == "paper"){
    console.log("paper");
    console.log("DRAW");

} else if (ai == "paper" && choice == "rock"){
    console.log("paper");
    console.log("YOU LOST");

} else if (ai == "paper" && choice == "scissors"){
    console.log("paper");
    console.log("YOU WON");

} else if (ai == "scissors" && choice == "scissors"){
    console.log("scissors");
    console.log("DRAW");
    
} else if (ai == "scissors" && choice == "paper"){
    console.log("scissors");
    console.log("YOU LOST");

} else if (ai == "scissors" && choice == "rock"){
    console.log("scissors");
    console.log("YOU WON");

} else if (!choice && choice != "rock" || "paper" || "scissors"){
    console.log("RULES: ROCK PAPER SCISSORS")
    console.log("ROCK beats SCISSORS but loses to PAPER,")
    console.log("PAPER wins ROCK but loses to SCISSORS,")
    console.log("SCISSORS loses to ROCK but wins to PAPER.");
    console.log(" ~ps. write your choice down in lower case");
}

