#!/usr/bin/node
import defaultExport, { actual as name } from '..';
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".');
defaultExport();
const count = 3;
const evenGame = (step) => {
  const num = Math.floor((Math.random() * 20) + 1); 
  console.log(`Question:${num}`);
  const answer = readlineSync.question('Your answer:');
  const even = ((num % 2) === 0) ? 'yes' : 'no';
  const messageRight = 'Correct!';
  const messageWrong = `'${answer}' is wrong answer ;(. Correct answer was ${even}.
  Let's try again, ${name}!`;
  if (answer === even) {
    console.log(messageRight);
    step += 1;
    if (step > count) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    return evenGame(step);
  }
  console.log(messageWrong);
};
evenGame(1);
