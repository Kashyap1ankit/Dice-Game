'use script';

// Defining the variables to be used further

const currentscore0 = document.querySelector('.currentscore0');
const currentscore1 = document.querySelector('.currentscore1');
const diceImage = document.querySelector('.dice');

const btnNewgame = document.querySelector('.newgame');
const btnHold = document.querySelector('.hold');
const btnRollDice = document.querySelector('.rolldice');

let currentscore = 0; // declaring the varibale to store the current score and then adding after every roll

let activePlayer = 0;

let score = [0, 0];

let playing = true;

document.querySelector('.dice').classList.add('hidden');

btnRollDice.addEventListener('click', function () {
  if (playing) {
    let diceValue = Math.trunc(Math.random() * 6) + 1;

    diceImage.src = `dice--${diceValue}.png`;

    currentscore += diceValue;

    document.querySelector('.dice').classList.remove('hidden');

    document.querySelector(`.currentscore${activePlayer}`).textContent =
      currentscore;
  }
});

btnHold.addEventListener('click', function () {
  score[activePlayer] += currentscore;

  document.querySelector(`.score${activePlayer}`).textContent =
    score[activePlayer];

  currentscore = 0;

  document.querySelector(`.currentscore${activePlayer}`).textContent = 0;
  if (score[activePlayer] >= 50) {
    playing = false;

    document.querySelector(`.player${activePlayer}`).classList.add('winner');

    document.querySelector(`.playertext${activePlayer}`).textContent =
      '♥️WINNER';

    document
      .querySelector(`.player${activePlayer === 0 ? 1 : 0}`)
      .classList.add('loser');

    document.querySelector(
      `.playertext${activePlayer === 0 ? 1 : 0}`
    ).textContent = '😞You Lose';

    document
      .querySelector(`.player${activePlayer}`)
      .classList.remove('activeplayer');
  } else {
    activePlayer = activePlayer === 0 ? 1 : 0;

    document.querySelector(`.player0`).classList.toggle('activeplayer');
    document.querySelector(`.player1`).classList.toggle('activeplayer');
  }
});

btnNewgame.addEventListener('click', function () {
  currentscore0.textContent = 0;
  currentscore1.textContent = 0;
  document.querySelector('.score0').textContent = 0;
  document.querySelector('.score1').textContent = 0;
  document.querySelector('.player0').classList.add('activeplayer');
  document.querySelector('.player1').classList.remove('activeplayer');
  document.querySelector('.dice').classList.add('hidden');
  document.querySelector(`.player0`).classList.remove('winner');
  document.querySelector(`.player1`).classList.remove('winner');
  document.querySelector(`.player0`).classList.remove('loser');
  document.querySelector(`.player1`).classList.remove('loser');
  document.querySelector('.playertext0').textContent = 'Player1';
  document.querySelector('.playertext1').textContent = 'Player2';
  playing = true;
  score = [0, 0];
  currentscore = 0;
  activePlayer = 0;
});
