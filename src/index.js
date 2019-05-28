import readlineSync from 'readline-sync';

const startGame = (rule, question) => {
  const numStage = 3;
  console.log(`Welcome to the Brain Games!\n${rule}`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const setQuestion = () => {
    const iter = (step) => {
      const resFunc = question();
      console.log(`Question:${resFunc[0]}`);
      const answer = resFunc[1];
      const playerAnswer = readlineSync.question('Your answer:');
      if (playerAnswer === answer) {
        console.log('Correct!');
        if (step === numStage) {
          console.log('Congratulations!');
          return;
        }
        return iter(step + 1);
      }
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${answer}.
      Let's try again, ${name}!`);
    };
    return iter(1);
  };
  setQuestion();
};

export default startGame;
