const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const startRound = () => {
  const length = getRandomNumber(5, 10);
  const start = getRandomNumber(1, 20);
  const step = getRandomNumber(1, 10);
  const hiddenIndex = getRandomNumber(0, length - 1);

  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }
  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return { question, correctAnswer };
};

export default {
  description: 'What number is missing in the progression?',
  startRound,
};