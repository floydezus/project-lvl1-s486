import getRandomNumber from '../utils';
import startGame from '..';

const findGcd = (a, b) => {
  if (b) {
    return findGcd(b, a % b);
  }
  return Math.abs(a);
};

const gameDescription = 'Find the greatest common divisor of given numbers.';
const getQuestionAndAnswer = () => {
  const first = getRandomNumber(1, 50);
  const second = getRandomNumber(1, 50);
  const question = `${first} ${second}`;
  return [question, findGcd(first, second).toString()];
};

export default () => startGame(gameDescription, getQuestionAndAnswer);
