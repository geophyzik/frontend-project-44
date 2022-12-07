import startGame from '../../index.js';
import getRandomInt from '../RandomNumber.js';
import GetRandomOperator from '../RandomOperator.js';

// game
const gameRule = 'What is the result of the expression?';

const calculate = (number1, number2, sign) => {
  let result = '';
  switch (sign) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      break;
  }
  return result;
};

const getGameData = () => {
  const number1 = getRandomInt(10);
  const number2 = getRandomInt(10);
  const sign = GetRandomOperator();

  const question = `${number1} ${sign} ${number2}`;
  const correctAnswer = calculate(number1, number2, sign);

  return [question, correctAnswer.toString()];
};

const runGameCalc = () => {
  startGame(gameRule, getGameData);
};

export default runGameCalc;
