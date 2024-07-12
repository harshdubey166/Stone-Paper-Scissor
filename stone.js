let userScore= 0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");

const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");

const getCompChoice=()=>{
    const options= ["rock", "paper", "scissors"];
    const randomIdx= Math.floor(Math.random()*3); // generates random number

    return options[randomIdx];
};

const drawGame=()=>{
    // console.log("game was draw");
    msg.innerText = "Game was draw. Play again";
    msg.style.backgroundColor="#081b31";
};

const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        // console.log("You won!");
        userScore++;
        userScorePara.innerText= userScore;
        msg.innerText= `You Won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        // console.log("You lose :)");
        compScore++;
        compScorePara.innerText= compScore;
        msg.innerText=`You Lost :) ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame=(userChoice)=>{
    // console.log("user choice = ", userChoice); // userchoice 

    // generate computer choice
    const compChoice= getCompChoice();
    // console.log("computer choice = ", compChoice);

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            // scissors and paper
            userWin= compChoice==="scissors" ?true: false;
        }
        else if(userChoice==="paper"){
            // scissors and rock
            userWin= compChoice==="rock"? true: false;
        }
        else{
            // rock and paper
            userWin= compChoice==="rock" ? false: true;
        }

        showWinner(userWin, userChoice, compChoice);
    }

};

choices.forEach((choice)=>{  
    choice.addEventListener("click", ()=>{
        const userChoice= choice.getAttribute("id");
        // console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});

