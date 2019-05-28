import getRandomNum from '../utils';

const getProgression = (count, step, head) => {
  const result = [];
  for (let i = 0; i < count; i += 1) {
    result[i] = head + step * i;
  }
  return result;
};

const gameDescription = 'What number is missing in the progression?';
const getQuestionAndAnswer = () => {
  const lengtProgression = 10;
  const stepProgression = getRandomNum(1, 6);
  const progression = getProgression(lengtProgression, stepProgression, 1);
  const numForHide = getRandomNum(1, lengtProgression);
  const answer = progression[numForHide].toString();
  progression[numForHide] = '..';
  const question = progression.reduce((accumulator, currentValue) => `${accumulator} ${currentValue}`);
  return [question, answer];
};

export { gameDescription, getQuestionAndAnswer };
