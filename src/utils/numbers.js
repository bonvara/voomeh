export function generateRandomNumber(min = 10, max = 10000) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function calculateAccuracy(userAnswer, correctAnswer) {
  const difference = Math.abs(userAnswer - correctAnswer);
  const maxDifference = Math.max(userAnswer, correctAnswer);
  return Math.round(((maxDifference - difference) / maxDifference) * 100);
}
