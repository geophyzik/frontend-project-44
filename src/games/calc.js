import startGame from '../../index.js';
import getRandomInt from '../RandomNumber.js';

// game
const gameRule = 'What is the result of the expression?';

const getRandomOperator = () => {
  const choiceOperator = ['+', '-', '*'];
  const index = Math.floor(Math.random() * choiceOperator.length);
  return choiceOperator[index];
};

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
  const number1 = getRandomInt(0, 10);
  const number2 = getRandomInt(0, 10);
  const sign = getRandomOperator();

  const question = `${number1} ${sign} ${number2}`;
  const correctAnswer = calculate(number1, number2, sign);

  return [question, correctAnswer.toString()];
};

const runGameCalc = () => {
  startGame(gameRule, getGameData);
};

export default runGameCalc;
