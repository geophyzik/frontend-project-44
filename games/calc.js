import main from '../index.js';
import getRandomInt from '../src/RandomNumber.js';
import GetRandomOperator from '../src/RandomOperator.js';

// game
const BrainGame = () => {
  const rule = 'What is the result of the expression?';

  const calc = () => {
    const number1 = getRandomInt();
    const number2 = getRandomInt();
    const sign = GetRandomOperator();

    const question = `${number1} ${sign} ${number2}`;

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
    return [question, result.toString()];
  };

  main(rule, calc);
};

export default BrainGame;

// BrainGame(); //test
