import getRandomNumber from '../utils';
import startGame from '..';

const signs = ['+', '-', '*'];

const gameDescription = 'What is the result of the expression?';
const getQuestionAndAnswer = () => {
  const first = getRandomNumber(1, 20);
  const second = getRandomNumber(1, 20);
  const sign = signs[getRandomNumber(0, signs.length - 1)];
  const question = `${first}${sign}${second}`;
  let answer;
  switch (sign) {
    case '+':
      answer = first + second;
      break;
    case '-':
      answer = first - second;
      break;
    case '*':
      answer = first * second;
      break;
    default:
      break;
  }
  return [question, answer.toString()];
};

export default () => startGame(gameDescription, getQuestionAndAnswer);
