import getRandomNumber from '../utils';
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
  const stepProgression = getRandomNumber(1, 6);
  const progression = getProgression(lengthProgression, stepProgression, 1);
  const indexMissedElements = getRandomNumber(1, lengthProgression);
  const answer = progression[indexMissedElements].toString();
  progression[indexMissedElements] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

export default () => startGame(gameDescription, getQuestionAndAnswer);
