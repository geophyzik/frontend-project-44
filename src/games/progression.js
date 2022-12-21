import startGame from '../../index.js';
import getRandomInt from '../RandomNumber.js';

const gameRule = 'What number is missing in the progression?';

const getLineAndAnswer = (firstNumber, numberStep, indexLostNumber, lineOfNumbers) => {
  lineOfNumbers.push(firstNumber);
  for (let i = 0; i < 9; i += 1) {
    lineOfNumbers.push(lineOfNumbers[i] + numberStep);
  }
  const result = lineOfNumbers[indexLostNumber];

  return result;
};

const getGameData = () => {
  const firstNumber = getRandomInt(0, 10);
  const numberStep = getRandomInt(1, 5);
  const indexLostNumber = getRandomInt(0, 10);
  const lineOfNumbers = [];
  const correctAnswer = getLineAndAnswer(firstNumber, numberStep, indexLostNumber, lineOfNumbers);
  lineOfNumbers[indexLostNumber] = '..';
  const question = lineOfNumbers.join(' ');

  return [question, correctAnswer.toString()];
};

const runGameProgression = () => {
  startGame(gameRule, getGameData);
};

export default runGameProgression;
