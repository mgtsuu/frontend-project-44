import readlineSync from 'readline-sync'

const runGame = (gameConfig) => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log(gameConfig.description)

  const roundCount = 3
  for (let i = 0; i < roundCount; i++) {
    const { question, correctAnswer } = gameConfig.startRound()
    console.log(`Question: ${question}`)
    const playerAnswer = readlineSync.question('Your answer: ')

    if (playerAnswer === String(correctAnswer)) {
      console.log('Correct!')
    }
    else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }

  console.log(`Congratulations, ${name}!`)
}

export default runGame
