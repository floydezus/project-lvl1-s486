import getRandomNumber from '../utils';
import startGame from '..';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';
const isEven = number => number % 2 === 0;
const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 30);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => startGame(gameDescription, getQuestionAndAnswer);
