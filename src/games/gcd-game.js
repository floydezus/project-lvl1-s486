import getRandomNum from '../utils';
import startGame from '..';

const findGCD = (a, b) => {
  if (b) {
    return findGCD(b, a % b);
  }
  return Math.abs(a);
};

const gameDescription = 'Find the greatest common divisor of given numbers.';
const getQuestionAndAnswer = () => {
  const first = getRandomNum(1, 50);
  const second = getRandomNum(1, 50);
  const question = `${first} ${second}`;
  return [question, findGCD(first, second).toString()];
};

export default () => startGame(gameDescription, getQuestionAndAnswer);
