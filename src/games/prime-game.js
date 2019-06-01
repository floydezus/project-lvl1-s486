import getRandomNumber from '../utils';
import startGame from '..';

const isPrime = (n) => {
  if (n <= 1) {
    return false;
  }
  for (let d = 2; d <= Math.sqrt(n); d += 1) {
    if (n % d === 0) {
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
