import getRandomInt from '../RandomNumber.js';
import startGame from '../../index.js';

// igra
const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
export const getGameData = () => {
  const number = getRandomInt();
  const question = number;
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no'; // correct answer

  return [question, correctAnswer];
};

const runGameEven = () => {
  startGame(gameRule, getGameData);
};

export default runGameEven;
