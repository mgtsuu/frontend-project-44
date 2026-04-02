#!/usr/bin/env node

import readlineSync from 'readline-sync'

const isEven = num => num % 2 === 0

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1

const runGame = () => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  let correctAnswers = 0
  const requiredAnswers = 3

  while (correctAnswers < requiredAnswers) {
    const number = getRandomNumber()
    console.log(`Question: ${number}`)
    const userAnswer = readlineSync.question('Your answer: ').trim().toLowerCase()

    const correctAnswer = isEven(number) ? 'yes' : 'no'

    if (userAnswer === correctAnswer) {
      console.log('Correct!')
      correctAnswers++
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }
  console.log(`Congratulations, ${name}!`)
}

runGame()
