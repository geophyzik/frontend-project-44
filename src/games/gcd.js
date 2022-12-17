import startGame from '../../index.js';
import getRandomInt from '../RandomNumber.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const determineGcd = (number1, number2) => {
  let result = 0;
  const minNumber = number1 > number2 ? number2 : number1;
  for (let i = 0; i <= minNumber; i += 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      result = i;
    }
  }
  return result;
};

const getGameData = () => {
  const number1 = getRandomInt(3, 7);
  const number2 = getRandomInt(3, 7);

  const question = `${number1} ${number2}`;
  const correctAnswer = determineGcd(number1, number2);

  return [question, correctAnswer.toString()];
};

const runGameGcd = () => {
  startGame(gameRule, getGameData);
};

export default runGameGcd;
