#!/usr/bin/env node
import runGame from '../src/index.js'

const getRandomNumber = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min

const gcd = (a, b) => {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

const startRound = () => {
  const a = getRandomNumber()
  const b = getRandomNumber()
  const question = `${a} ${b}`
  const correctAnswer = gcd(a, b)
  return { question, correctAnswer }
}

runGame({
  description: 'Find the greatest common divisor of given numbers.',
  startRound,
})
