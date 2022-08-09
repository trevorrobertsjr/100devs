if (!localStorage.getItem('deck_id')) {
  fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      localStorage.setItem('deck_id', data.deck_id)
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}

//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', dealTwoCards)

function dealTwoCards() {
  fetch(`https://deckofcardsapi.com/api/deck/${localStorage.getItem('deck_id')}/draw/?count=2`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      // Player 1
      document.getElementById("player1").src = data.cards[0].image
      // Player 2
      document.getElementById("player2").src = data.cards[1].image
      //original
      // document.querySelector("h3").innerText = winnerChickenDinner(data.cards[0].code, data.cards[1].code)
      document.querySelector("h3").innerText = winnerChickenDinner(data.cards[0].value, data.cards[1].value)
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}

function winnerChickenDinner(player1, player2) {
  let player1Number = convertCardValue(player1)
  let player2Number = convertCardValue(player2)
  if (player1Number > player2Number) {
    return "Player 1 Wins!"
  } else if (player1Number < player2Number) {
    return "Player 2 Wins!"
  }
  return "I.DE.CLARE.WAR!!!!!!"

}
function convertCardValue(cardValueString) {
  switch (cardValueString) {
    case "JACK":
      return 11;
      break;
    case "QUEEN":
      return 12;
      break;
    case "KING":
      return 13;
      break;
    case "ACE":
      return 14;
      break;
    default:
      return Number(cardValueString);
  }
}
// original helpers
// function winnerChickenDinner(player1, player2) {
//   player1Card = player1.split("")
//   player2Card = player2.split("")
//   let player1Number = convertCardValue(player1Card[0])
//   let player2Number = convertCardValue(player2Card[0])
//   if (player1Number > player2Number) {
//     return "Player 1 Wins!"
//   } else if (player1Number < player2Number) {
//     return "Player 2 Wins!"
//   }
//   return "I.DE.CLARE.WAR!!!!!!"

// }
// function convertCardValue(cardValueString) {
//   switch (cardValueString) {
//     case "0":
//       return 10;
//       break;
//     case "J":
//       return 11;
//       break;
//     case "K":
//       return 12;
//       break;
//     case "A":
//       return 13;
//       break;
//     default:
//       return Number(cardValueString);
//   }
// }

