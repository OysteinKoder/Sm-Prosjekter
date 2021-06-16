

// ↓↓↓ Let statments that defines counters and playerturns in the game ↓↓↓
let rollScore = 0;
let oneScore = 0;
let oneRounds = 0;
let twoRounds = 0;
let twoScore = 0;
let turn = true;
let dice = ""
let enabled = true;
// ↑↑↑ Let statments that defines counters and playerturns in the game ↑↑↑


// ↓↓↓ simple const strings that i will use to "push" to html elements↓↓↓
const playerOneText = "Red Score: ";
const playerOneRolled = "Red Rolled: ";
const playerOneTotalWinsText ="Rounds Won: " ;
const playerTwoText = "Blue Score: ";
const playerTwoRolled = "Blue Rolled: ";
const playerTwoTotalWinsText ="Rounds Won: ";
const rollText = "Roll Value: ";
// ↑↑↑ simple const strings that i will use to "push" to html elements ↑↑↑




// ↓↓↓ used to get elements in the dom ↓↓↓
const playerOne = document.getElementById("playerOne");
const playerOneRoundsWon = document.getElementById("playerOneTotalWins");
const playerTwo = document.getElementById("playerTwo");
const playerTwoRoundsWon = document.getElementById("playerTwoTotalWins")
const rollValue = document.getElementById("rollValue");
const rollBtn = document.getElementById("roll");
const resetBtn = document.getElementById("reset");
resetBtn.disabled = true;
const redLogo = document.getElementById("redRed");
const blueLogo = document.getElementById("blueBlue");
const rollSound = document.getElementById("rollSound")
// ↑↑↑ used to get elements in the dom ↑↑↑

// ↓↓↓Dice image const which src will change depending on roll value↓↓↓
const diceImg = document.createElement("img");
diceImg.setAttribute("height", "64");
diceImg.setAttribute("width", "64");
diceImg.setAttribute("src", "blueDice/1blue.png")
rollValue.appendChild(diceImg);

// ↑↑↑ Dice image const which src will change depending on roll value↑↑↑


// ↓↓↓ Dom element text defined using the lets and consts above↓↓↓
playerOne.innerHTML = playerOneText + oneScore;
playerTwo.innerHTML = playerTwoText + twoScore;
// rollValue.innerHTML = rollText + rollScore;
playerOneRoundsWon.innerHTML = playerOneTotalWinsText + oneRounds;
playerTwoRoundsWon.innerHTML = playerTwoTotalWinsText + twoRounds;
// ↑↑↑ Dom element text defined using the lets and consts above↑↑↑


 


// This function contains the code that changes the elements in the html so that the dice game works. 
// ↓↓↓ The code is fired via clicking the button that has the id of roll  ↓↓↓
function gameFunction () {
    rollValue.appendChild(diceImg);
    const randomNumber = Math.floor(Math.random() *6 + 1);
    rollScore = randomNumber;
    dieFace()
    turn = !turn;
    rollSound.play();
    rollBtn.innerText = "Roll";
    rollBtn.disabled = true;
    
    if (enabled === true) {
    setTimeout (timeOut, 500);
}


    if (turn === true) {    
        oneScore = oneScore + randomNumber  
        playerOne.innerHTML = playerOneText + oneScore
        if ( oneScore >= 21) {
            oneRounds++;
            playerOneRoundsWon.innerHTML = playerOneTotalWinsText + oneRounds;
            redLogo.classList.add("winning")
            rollBtn.disabled = true;
            resetBtn.disabled = false;
            enabled = false;
        }
    }    
    else {
        twoScore = twoScore + randomNumber;
        playerTwo.innerHTML = playerTwoText + twoScore;
        if (twoScore >= 21) {
            twoRounds++;
            playerTwoRoundsWon.innerHTML = playerTwoTotalWinsText + twoRounds;
            blueLogo.classList.add("winning");
            rollBtn.disabled = true;
            resetBtn.disabled = false; 
            enabled = false;
        }
    }
}
// ↑↑↑ This function contains the code that changes the elements in the html so that the dice game works. ↑↑↑
//  The code is fired via clicking the button that has the id of roll  




// ↓↓↓This function resets stuff when one of the players win the round. It is fired by the funtion gameFunction when either player reaches 21 or higher ↓↓↓
function resetScore () {
    oneScore = 0;
    playerOne.innerHTML = playerOneText + oneScore;
    twoScore = 0;
    playerTwo.innerHTML = playerTwoText + twoScore;
    rollScore = 0;
    rollBtn.innerText = "Start Round";
    blueLogo.classList.remove("winning");
    redLogo.classList.remove("winning");
    resetBtn.disabled = true;
    rollBtn.disabled = false;
    rollValue.removeChild(diceImg)
    enabled = true;
}
// ↑↑↑This function resets stuff when one of the players win the round. It is fired by the funtion gameFunction when either player reaches 21 or higher ↑↑↑


function dieFace () { 
    if (rollScore === 1 && turn === true) {
    diceImg.setAttribute("src", "blueDice/1blue.png")
} 
    else if (rollScore  === 2 && turn === true) {
        diceImg.setAttribute("src", "blueDice/2blue.png")
}
    else if (rollScore === 3 && turn === true) {
        diceImg.setAttribute("src", "blueDice/3blue.png")
}
    else if (rollScore === 4 && turn === true) {
        diceImg.setAttribute("src", "blueDice/4blue.png")
}
    else if (rollScore === 5 && turn === true) {
        diceImg.setAttribute("src", "blueDice/5blue.png")
}
    else if (rollScore === 6 && turn === true) {
        diceImg.setAttribute("src", "blueDice/6blue.png")
}
    else if (rollScore === 1 && turn === false) {
        diceImg.setAttribute("src", "redDice/1red.png")
} 
    else if (rollScore  === 2 && turn === false) {
        diceImg.setAttribute("src", "redDice/2red.png")
}
    else if (rollScore === 3 && turn === false) {
        diceImg.setAttribute("src", "redDice/3red.png")
}
    else if (rollScore === 4 && turn === false) {
        diceImg.setAttribute("src", "redDice/4red.png")
}
    else if (rollScore === 5 && turn === false) {
        diceImg.setAttribute("src", "redDice/5red.png")
}
    else if (rollScore === 6 && turn === false) {
        diceImg.setAttribute("src", "redDice/6red.png")
}
 
}



function timeOut () {
    rollBtn.disabled = false;
}
