import readlineSync from 'readline-sync';

const startGame = (gameRule, getGameData) => {
  // greeting
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRule);

  // game
  const gameRounds = 3;
  for (let i = 0; i < gameRounds; i += 1) {
    const result = getGameData();
    console.log('Question:', result[0]);
    const userAnswer = readlineSync.question('You answer: ');
    const correctAnswer = result[1];

    if (userAnswer !== correctAnswer) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`); // uncorrect answer
    }
    console.log('Correct!');
  }
  return console.log(`Congratulation, ${userName}!`);
};

export default startGame;
