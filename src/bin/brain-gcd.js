#!/usr/bin/node
import startGame, { getRandomNum as rand } from '..';

const NOD = (a, b) => {
  if (b) {
    return NOD(b, a % b);
  }
  return Math.abs(a);
};

const getRule = () => 'Find the greatest common divisor of given numbers.';
const funcQuestion = () => {
  const first = rand(1, 50);
  const second = rand(1, 50);
  const question = `${first} ${second}`;
  return [question, NOD(first, second)];
};

startGame(getRule, funcQuestion);
