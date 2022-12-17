import startGame from '../../index.js';
import getRandomInt from '../RandomNumber.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return true;
    }
  }
  return false;
};

const checkPrimeNumber = (number) => {
  let answer = isPrime(number) ? 'no' : 'yes';

  if (number === 1 || number === 0) {
    answer = 'no';
  }

  return answer;
};

const getGameData = () => {
  const number1 = getRandomInt();

  const question = number1;
  const correctAnswer = checkPrimeNumber(number1);

  return [question, correctAnswer.toString()];
};

const runGamePrime = () => {
  startGame(gameRule, getGameData);
};

export default runGamePrime;
