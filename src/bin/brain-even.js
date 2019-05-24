#!/usr/bin/node
import startGame, { getRandomNum as rand } from '..';

const getRule = () => 'Answer "yes" if number even otherwise answer "no".';
const funcQuestion = () => {
  const num = rand(1, 30);
  const question = `${num}`;
  const answer = ((num % 2) === 0) ? 'yes' : 'no';
  return [question, answer];
};

startGame(getRule, funcQuestion);
