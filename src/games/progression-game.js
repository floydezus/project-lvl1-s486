import getRandomNum from '../utils';

const getProgression = (count, d, head) => {
  const result = [];
  for (let i = 0; i < count; i += 1) {
    result[i] = head + d * i;
  }
  return result;
};

const getRule = 'What number is missing in the progression?';
const funcQuestion = () => {
  const lengtProgression = 10;
  const stepProgression = getRandomNum(1, 6);
  const progression = getProgression(lengtProgression, stepProgression, 1);
  const numForHide = getRandomNum(1, 10);
  const answer = progression[numForHide].toString();
  progression[numForHide] = '..';
  const question = progression.reduce((accumulator, currentValue) => `${accumulator} ${currentValue}`);
  return [question, answer];
};

export { getRule, funcQuestion };
