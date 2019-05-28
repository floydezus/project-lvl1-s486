import getRandomNum from '../utils';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';
const isEven = number => number % 2 === 0;
const getQuestionAndAnswer = () => {
  const question = `${getRandomNum(1, 30)}`;
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export { gameDescription, getQuestionAndAnswer };
