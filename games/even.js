const getRandomNumber = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

const isEven = (num) => num % 2 === 0;

const startRound = () => {
  const number = getRandomNumber();
  const question = `${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default {
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  startRound,
};