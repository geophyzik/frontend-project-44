import main from '../index.js';
import getRandomInt from '../src/RandomNumber.js';
import GetRandomOperator from '../src/RandomOperator.js';

// game
const BrainGame = () => {
  const rule = 'What is the result of the expression?';

  const progression = () => {
    const firstNumber = getRandomInt(10);
    const step = getRandomInt(5);
    const lostNumber = getRandomInt(10);
    const arrayNumbers = [];
    arrayNumbers.push(firstNumber);
    for (let i = 0; i < 9; i += 1) {
      arrayNumbers.push(arrayNumbers[i]+step);
    }
    let result = arrayNumbers[lostNumber];
    arrayNumbers[lostNumber] = '..';
    const question = arrayNumbers.join(' ');
    return [question, result.toString()];
};

  main(rule, progression);
};

export default BrainGame;

// BrainGame(); //test
