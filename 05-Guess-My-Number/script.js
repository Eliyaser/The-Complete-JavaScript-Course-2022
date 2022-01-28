'use strict';
/*
let message = document.querySelector('.message').textContent;
console.log(message);

document.querySelector('.message').textContent = 'Start guessing...';
document.querySelector('.score').textContent = 20;
document.querySelector('.number').textContent = '?';
document.querySelector('.guess').value = 23;

*/
let securetNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = securetNumber;
let score = 20;
let highScore = 0;
console.log(securetNumber);

function displaymessage(message) {
  document.querySelector('.message').textContent = message;
}

// Event
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displaymessage('⛔️ No number!');

    // when player wins
  } else if (guess === securetNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displaymessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = securetNumber;
    //set highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //when guess is Too high
  } else if (guess != securetNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > securetNumber ? '📈 Too high!' : '📉 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displaymessage('💥 You lost the game!');
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }

  // large code editing
  // else if (guess > securetNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //when guess is Too Low
  // } else if (guess < securetNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

// reset the game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  securetNumber = Math.trunc(Math.random() * 20) + 1;
  // console.log(securetNumber);
  // befor start
  // document.querySelector('.message').textContent = 'Start guessing...';
  displaymessage('Start guessing...');

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
