import getRandomNum from '../utils';

const getRule = 'What is the result of the expression?';
const funcQuestion = () => {
  const signs = ['+', '-', '*'];
  const first = getRandomNum(1, 20);
  const second = getRandomNum(1, 20);  
  const sign = signs[getRandomNum(0, signs.length)];
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

export { getRule, funcQuestion };