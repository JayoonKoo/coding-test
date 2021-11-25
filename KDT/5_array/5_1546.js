// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `3
10 20 30`.split('\n')

const N = Number(input[0])
const splitInput = input[1].split(' ').map(Number)

const M = splitInput.reduce((a, b) => Math.max(a, b))

const newScoreAverage = splitInput.map(score => (score/M) * 100).reduce((a,b) => a+b) / N

console.log(newScoreAverage)

