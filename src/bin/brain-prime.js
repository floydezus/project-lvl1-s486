#!/usr/bin/node
import startGame, { getRandomNum as rand } from '..';

const prime = (n) => {
  if(n == 1)
  return false;
for(let d = 2; d * d <= n; d += 1) {  
  if(n % d == 0) 
    return false;
  }
return true;
};

const getRule = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';
const funcQuestion = () => {    
  const question = rand(1, 50);;
  const answer = (prime(question)) ? 'yes': 'no';
  return [question, answer];
};

startGame(getRule, funcQuestion);
