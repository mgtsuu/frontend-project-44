#!/usr/bin/env node

import runGame from '../src/index.js'

const isPrime = (num) => {
  if (num < 2) return false

  if (num === 2) return true

  if (num % 2 === 0) return false

  const limit = Math.sqrt(num)
  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) return false
  }
  return true
}

const getRandomNumber = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min

const startRound = () => {
  const number = getRandomNumber()
  const question = `${number}`
  const correctAnswer = isPrime(number) ? 'yes' : 'no'
  return { question, correctAnswer }
}

runGame({
  description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  startRound,
})
