let userScore= 0;
let compScore= 0;

const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");

const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");

const gencompChoice=()=>{
    const options= ["rock", "paper", "scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
};


const drawGame=()=>{
    msg.innerText= "Game was Draw.Play again.";
}


const showWinner=(UserWin, userChoice, compChoice)=>{
    if(UserWin){
        userScore++;
        userScorePara.innerText= userScore;
        msg.innerText= `You Win! Your ${userChoice} beats ${compChoice}`;
    }else{
        compScore++;
        compScorePara.innerText= compScore;
        msg.innerText= `You Lost. ${compChoice} beats Your ${userChoice}`;
    }
};

const playGame=(userChoice)=>{
    // generate computer choice
    const compChoice= gencompChoice();
    if(userChoice === compChoice){
        // draw game
        drawGame();
    }else{
        let UserWin= true;
        if(userChoice === "rock"){
            // scissors,paper
            UserWin= compChoice === "Paper"? false: true;
        }else if(userChoice === "paper"){
            // rock,scissors
            UserWin= compChoice === "scissors"? false: true;
        }else{
            // rock,paper
            UserWin= compChoice === "rock"? false: true;
        }
        showWinner(UserWin, userChoice, compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    });
});

msg.addEventListener("click",()=>{
    console.log("Game Start Now!");
});