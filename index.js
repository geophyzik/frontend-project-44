import readlineSync from 'readline-sync';

// greeting
const main = (rule, calc) => {
  console.log('Welcome to the Brain Games!');
  const UserName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${UserName}!`);
  console.log(rule);

  // game
  for (let i = 0; i < 3; i += 1) {
    const result = calc();
    console.log('Question: ', result[0]);
    const UserAnswer = readlineSync.question('You answer: ');

    const CorrectAnswer = result[1];

    if (UserAnswer === CorrectAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${UserAnswer}' is wrong answer ;(. Correct answer was '${CorrectAnswer}'.\nLet's try again, ${UserName}!`); // uncorrect answer
      return;
    }
  }
  console.log(`Congratulation, ${UserName}!`);
};

export default main;
