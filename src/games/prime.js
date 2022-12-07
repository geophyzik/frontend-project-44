import startGame from '../../index.js';
import getRandomInt from '../RandomNumber.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const calculate = (number1) => {
  let answer = 'yes';

  for (let i = 2; i < number1; i += 1) {
    if (number1 % i === 0) {
      answer = 'no';
    }
  }
  if (number1 === 1 || number1 === 0) {
    answer = 'no';
  }
  return answer;
};

const getGameData = () => {
  const number1 = getRandomInt();

  const question = number1;
  const correctAnswer = calculate(number1);

  return [question, correctAnswer.toString()];
};

const runGamePrime = () => {
  startGame(gameRule, getGameData);
};

export default runGamePrime;
