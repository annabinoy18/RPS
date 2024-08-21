function getComputerChoice(){
    let rpsChoices=["rock","paper","scissors"]
    let computerChoice=rpsChoices[Math.floor(Math.random()* 3)]
    return computerChoice
}

function getResult(playerChoice,computerChoice){
    let score;
    if (playerChoice==computerChoice){
        score=0
    }
    else if (playerChoice=='rock' && computerChoice=='scissors'){
        score=1
    }
    else if (playerChoice=='paper' && computerChoice=='rock'){
        score=1
    }
    else if (playerChoice=='scissors' && computerChoice=='paper'){
        score=1
    }

    else{
        score=-1
    }

    return score

}

function showResult(score,playerChoice,computerChoice){
    let result=document.getElementById("result")
    switch (score){
        case -1:
            result.innerText='You Loose!'
            break;
        case 0:
            result.innerText="It's a draw"
            break;
        case 1:
            result.innerText='You Win!'
            break;
    }

    let playerScore=document.getElementById('player-score')
    playerScore.innerText=`${Number(playerScore.innerText)+ score}`
    let hands=document.getElementById('hands')
    hands.innerText=`${playerChoice}   vs   ${computerChoice}`

}

function onClickRPS(playerChoice){
    const computerChoice=getComputerChoice()
    const score=getResult(playerChoice.value,computerChoice)
    showResult(score,playerChoice.value,computerChoice)
}

function playGame(){
    let rpsButtons=document.querySelectorAll('.rpsButton')
    rpsButtons.forEach(rpsButton => {
        rpsButton.onclick = () => onClickRPS(rpsButton)
      })
    let endGameButton=document.getElementById('endGameButton')
    endGameButton.onclick=() => endGame()
}

function endGame(){
    let playerScore=document.getElementById('player-score')
    playerScore.innerText=''
    let hands=document.getElementById('hands')
    hands.innerText=''
    let result=document.getElementById('result')
    result.innerText=''
}


playGame()