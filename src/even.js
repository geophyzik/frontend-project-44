import readlineSync from 'readline-sync';

// Имя
console.log('Welcome to the Brain Games!');
const UserName = readlineSync.question('May I have your name? ');

// privetstvie
export const Greeting = () => {
  console.log(`Hello, ${UserName}!`);
};

// igra
export const EvenGame = () => {
  const number = [3, 6, 10];
  console.log('Answer "yes" if the number is even, otherwise answer "no".'); // rule
  for (let i = 0; i < number.length; i += 1) {
    console.log(`Question: ${number[i]}`);
    const UserAnswer = readlineSync.question('You answer: '); // user answer
    const CorAnswer = number[i] % 2 === 0 ? 'yes' : 'no'; // correct answer
    if (UserAnswer === CorAnswer) {
      console.log('Correct!');
    } else { // correct answer
      const fail = console.log(`'${UserAnswer}' is wrong answer ;(. Correct answer was '${CorAnswer}'.\nLet's try again, ${UserName}!`); // uncorrect answer
      return fail;
    }
  }
  return console.log(`Congratulation, ${UserName}!`);
};
