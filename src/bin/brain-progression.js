#!/usr/bin/node
import startGame, { getRandomNum as rand } from '..';

const progression = (count, d, head) => {
  const result = [];
  result[0] = head;
  for (let i = 1; i < count; i += 1) {
    result[i] = result[i - 1] + d;
  }  
  return result;
};

const getRule = () => 'What number is missing in the progression?';
const funcQuestion = () => {
  const count = 10;
  const d = rand(1, 6);
  const prog = progression(count, d, 1);
  const num = rand(1, 10);
  const answer = prog[num].toString();
  prog[num] = '..';    
  const question = prog.reduce((accumulator, currentValue) => `${accumulator} ${currentValue}`);   
  return [question, answer];
};

startGame(getRule, funcQuestion);
