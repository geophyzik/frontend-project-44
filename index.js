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
    const [question, correctAnswer] = getGameData();
    console.log('Question:', question);
    const userAnswer = readlineSync.question('You answer: ');
    

    if (userAnswer !== correctAnswer) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`); // uncorrect answer
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default startGame;
