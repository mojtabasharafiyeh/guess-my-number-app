'use strict';
// console.log(document.querySelector('.message'));

// document.querySelector('.message').textContent = 'corect nmber😜';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = +document.querySelector('.guess').value;
  console.log(guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'put number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'correct';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = 'green';
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector('.highscore').textContent = highScore;
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'lose';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'lose';
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
