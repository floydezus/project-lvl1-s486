import readlineSync from 'readline-sync';

const startGame = (description, getQuestion) => {
  const stageCount = 3;
  console.log(`Welcome to the Brain Games!\n${description}`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const iter = (step) => {
    const [question, answer] = getQuestion();
    console.log(`Question:${question}`);    
    const playerAnswer = readlineSync.question('Your answer:');
    if (playerAnswer === answer) {
      console.log('Correct!');
      if (step === stageCount) {
        console.log('Congratulations!');
        return;
      }
      iter(step + 1);
      return;
    }
    console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${answer}.
      Let's try again, ${name}!`);
  };
  return iter(1);
};

export default startGame;
