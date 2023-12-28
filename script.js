let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genComChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () =>{
    // console.log("game was draw!");
    msg.innerText = "game was draw. Play again";
    msg.style.backgroundColor = "#F79824";
    
};

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        // console.log("you win!");
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText = `you Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green" ;
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        // console.log("you lose");
        msg.innerText = `you lose. your ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red" ;
    }
}

const playGame =(userChoice) =>{
    // console.log("user choice = ",userChoice);
    //Generate computer choice
    const compChoice = genComChoice();
    // console.log("comp choice = ",compChoice);

    if(userChoice==compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice == "rock"){
            //paper,scissors
            userWin = compChoice==="paper"? false : true;
        }else if(userChoice == "paper"){
            //scissors,rock
            userWin = compChoice==="scissors"? false : true;
        }else{
            //rock,paper
            userWin = compChoice === "rock"? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

