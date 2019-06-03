import getRandomNumber from '../utils';
import startGame from '..';

const isPrime = (n) => {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 50);
  const answer = (isPrime(question)) ? 'yes' : 'no';
  return [question, answer];
};

export default () => startGame(gameDescription, getQuestionAndAnswer);
