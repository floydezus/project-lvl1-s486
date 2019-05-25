import readlineSync from 'readline-sync';

const startGame = (rule, question) => {
  let name;
  let step = 1;
  const title = () => {
    console.log('Welcome to the Brain Games!');
    console.log(rule());
  };
  const getPlayerName = () => {
    name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
  };
  const setQuestion = () => {
    const resFunc = question();
    console.log(`Question:${resFunc[0]}`);
    const answer = resFunc[1];
    const playerAnswer = readlineSync.question('Your answer:');
    console.log(`player otvet` + typeof playerAnswer);
    console.log(`comp otvet` + typeof answer);
    if (playerAnswer === answer) {
      console.log('Correct!');
      step += 1;
      if (step > 3) {
        console.log('Congratulations!');
        return;
      }
      setQuestion();
    } else {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${answer}.
      Let's try again, ${name}!`);
    }
  };

  title();
  getPlayerName();
  setQuestion();
};

const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export default startGame;
export { getRandomNum };
