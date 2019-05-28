import getRandomNum from '../utils';

const gcd = (a, b) => {
  if (b) {
    return gcd(b, a % b);
  }
  return Math.abs(a);
};

const gameDescription = 'Find the greatest common divisor of given numbers.';
const getQuestionAndAnswer = () => {
  const first = getRandomNum(1, 50);
  const second = getRandomNum(1, 50);
  const question = `${first} ${second}`;
  return [question, gcd(first, second).toString()];
};

export { gameDescription, getQuestionAndAnswer };
