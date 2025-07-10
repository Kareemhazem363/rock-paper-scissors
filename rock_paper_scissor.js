let won = 0;
let lost = 0;
let draw = 0;

function play(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const emojis = {
    rock: '✊',
    paper: '✋',
    scissors: '✌️'
  };

  const playerHand = document.getElementById('player-hand');
  const computerHand = document.getElementById('computer-hand');
  const resultText = document.getElementById('result');
  const buttons = document.querySelectorAll('.buttons button');

  buttons.forEach(btn => btn.disabled = true);

  playerHand.classList.remove('glow-win', 'glow-lose', 'shake');
  computerHand.classList.remove('glow-win', 'glow-lose', 'shake');

  playerHand.textContent = '🤜';
  computerHand.textContent = '🤛';

  let countdown = 3;
  resultText.textContent = `Ready in ${countdown}...`;

  const countdownInterval = setInterval(() => {
    countdown--;
    if (countdown > 0) {
      resultText.textContent = `Ready in ${countdown}...`;
    } else {
      clearInterval(countdownInterval);

      playerHand.classList.add('shake');
      computerHand.classList.add('shake');

      setTimeout(() => {
        const computerChoice = choices[Math.floor(Math.random() * 3)];

        playerHand.textContent = emojis[playerChoice];
        computerHand.textContent = emojis[computerChoice];

        let result = "";

        if (playerChoice === computerChoice) {
          result = "It's a draw!";
          draw++;
        } else if (
          (playerChoice === 'rock' && computerChoice === 'scissors') ||
          (playerChoice === 'paper' && computerChoice === 'rock') ||
          (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
          result = "Congrats, You Won! 🎉";
          won++;
          playerHand.classList.add('glow-win');
          computerHand.classList.add('glow-lose');
        } else {
          result = "Oops, You Lost!";
          lost++;
          playerHand.classList.add('glow-lose');
          computerHand.classList.add('glow-win');
        }

        resultText.textContent = result;
        document.getElementById('won').textContent = won;
        document.getElementById('lost').textContent = lost;
        document.getElementById('draw').textContent = draw;

        buttons.forEach(btn => btn.disabled = false);

      }, 1000);
    }
  }, 1000);
}
function resetGame() {
  document.getElementById('player-hand').textContent = '✋';
  document.getElementById('computer-hand').textContent = '✊';
  document.getElementById('result').textContent = 'Make your move!';
  document.getElementById('player-hand').classList.remove('glow-win', 'glow-lose');
  document.getElementById('computer-hand').classList.remove('glow-win', 'glow-lose');
}
function resetAllGame() {
  won = 0;
  lost = 0;
  draw = 0;

  document.getElementById('won').textContent = '0';
  document.getElementById('lost').textContent = '0';
  document.getElementById('draw').textContent = '0';

  resetGame();
}
function toggleTheme() {
  document.body.classList.toggle('light-mode');
}