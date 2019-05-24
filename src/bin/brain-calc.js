#!/usr/bin/node

import startGame, { getRandomNum as rand } from '..';

const getRule = () => 'What is the result of the expression?';
const funcQuestion = () => {
  const signs = ['+', '-', '*'];
  const first = rand(1, 20);
  const second = rand(1, 20);
  const sign = signs[rand(1, 3)];
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
  return [question, answer];
};

startGame(getRule, funcQuestion);
