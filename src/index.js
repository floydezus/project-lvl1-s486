import readlineSync from 'readline-sync';

let actual;
const question = () => {
  actual = readlineSync.question(' May I have your name? ');
  console.log(`Hello, ${actual}!`);
};
export default question;
export { actual };
