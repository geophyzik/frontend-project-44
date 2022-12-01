import main from '../index.js';
import getRandomInt from '../src/RandomNumber.js';

// game
const BrainGame = () => {
  const rule = 'Find the greatest common divisor of given numbers.';

  const calc = () => {
    const number1 = getRandomInt();
    const number2 = getRandomInt();
    let result = 0;

    const question = `${number1} ${number2}`;

    const minNumber = number1 > number2 ? number2 : number1;
    for (let i = 0; i <= minNumber; i += 1) {
      if (number1 % i === 0 && number2 % i === 0) {
        result = i;
      }
    }
    return [question, result.toString()];
  };

  main(rule, calc);
};

export default BrainGame;

// BrainGame(); // test
