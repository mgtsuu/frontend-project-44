const getRandomNumber = (min = 1, max = 20) => Math.floor(Math.random() * (max - min + 1)) + min;
const operators = ['+', '-', '*'];

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    default: throw new Error(`Unknown operator: ${operator}`);
  }
};

const startRound = () => {
  const a = getRandomNumber();
  const b = getRandomNumber();
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const question = `${a} ${operator} ${b}`;
  const correctAnswer = calculate(a, b, operator);
  return { question, correctAnswer };
};

export default {
  description: 'What is the result of the expression?',
  startRound,
};