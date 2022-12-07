import startGame from '../../index.js';
import getRandomInt from '../RandomNumber.js';

// game
const gameRule = 'What is the result of the expression?';

const calculate = (firstNumber, step, lostNumber, arrayNumbers) => {
  arrayNumbers.push(firstNumber);
  for (let i = 0; i < 9; i += 1) {
    arrayNumbers.push(arrayNumbers[i] + step);
  }
  const result = arrayNumbers[lostNumber];

  return result;
};

const getGameData = () => {
  const firstNumber = getRandomInt(10);
  const step = getRandomInt(5);
  const lostNumber = getRandomInt(10);
  const arrayNumbers = [];
  const correctAnswer = calculate(firstNumber, step, lostNumber, arrayNumbers);
  arrayNumbers[lostNumber] = '..';
  const question = arrayNumbers.join(' ');

  return [question, correctAnswer.toString()];
};

const runGameProgression = () => {
  startGame(gameRule, getGameData);
};

export default runGameProgression;
