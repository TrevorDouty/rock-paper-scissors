let weapon = ["rock", "paper", "scissors"]
let result = ''
function play(playerChoice) {

  let comp = Math.floor(Math.random() * weapon.length)
  let computerChoice = weapon[comp]

  if (playerChoice == computerChoice) {
    result = 'Its a Tie'
  }

  if (computerChoice == 'rock') {
    if (playerChoice == 'scissors') {
      result = 'You are a LOSER'
    }
    else if (playerChoice == 'paper') {
      result = 'Winner Winner Chicken Dinner'
    }

  }

  if (computerChoice == 'scissors') {
    if (playerChoice == 'paper') {
      result = 'You are a LOSER'
    }
    else if (playerChoice == 'rock') {
      result = 'Winner Winner Chicken Dinner'
    }

  }

  if (computerChoice == 'paper') {
    if (playerChoice == 'rock') {
      result = 'You are a LOSER'
    }
    else if (playerChoice == 'scissors') {
      result = 'Winner Winner Chicken Dinner'
    }

  }
}

function outcome() {
  let didIWinElem = document.getElementById("didIWin")
  didIWinElem.innerText = result

}
outcome()