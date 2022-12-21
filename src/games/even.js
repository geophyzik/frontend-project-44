import getRandomInt from '../RandomNumber.js';
import startGame from '../../index.js';

const isEven = (question) => question % 2 === 0;

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
export const getGameData = () => {
  const question = getRandomInt();
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const runGameEven = () => {
  startGame(gameRule, getGameData);
};

export default runGameEven;
