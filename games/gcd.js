const getRandomEvenNumber = (min = 2, max = 100) => {
  const evenMin = Math.ceil(min / 2) * 2;
  const evenMax = Math.floor(max / 2) * 2;
  if (evenMin > evenMax) return evenMin;
  const count = (evenMax - evenMin) / 2 + 1;
  const randomIndex = Math.floor(Math.random() * count);
  return evenMin + randomIndex * 2;
};

const gcd = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const startRound = () => {
  const a = getRandomEvenNumber();
  const b = getRandomEvenNumber();
  const question = `${a} ${b}`;
  const correctAnswer = gcd(a, b);
  return { question, correctAnswer };
};

export default {
  description: 'Find the greatest common divisor of given numbers.',
  startRound,
};