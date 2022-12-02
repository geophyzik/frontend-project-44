import main from '../index.js';
import getRandomInt from '../src/RandomNumber.js';

// game
const BrainGame = () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const calc = () => {
    const number1 = getRandomInt(10);
    let answer = 'yes';

    const question = `${number1}`;

    for (let i = 2; i < number1; i += 1) {
      if (number1 % i === 0) {
        answer = 'no';
      }
    }
    if (number1 === 1 || number1 === 0) {
      answer = 'no';
    }
    return [question, answer.toString()];
  };
  main(rule, calc);
};

export default BrainGame;

// BrainGame(); // test
