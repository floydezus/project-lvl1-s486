import getRandomNum from '../utils';
import startGame from '..';

const lengthProgression = 10;

const getProgression = (count, step, head) => {
  const result = [];
  for (let i = 0; i < count; i += 1) {
    result[i] = head + step * i;
  }
  return result;
};

const gameDescription = 'What number is missing in the progression?';
const getQuestionAndAnswer = () => {
  const stepProgression = getRandomNum(1, 6);
  const progression = getProgression(lengthProgression, stepProgression, 1);
  const numForHide = getRandomNum(1, lengthProgression);
  const answer = progression[numForHide].toString();
  progression[numForHide] = '..';
  const question = progression.reduce((accumulator, currentValue) => `${accumulator} ${currentValue}`);
  return [question, answer];
};

export default () => startGame(gameDescription, getQuestionAndAnswer);
