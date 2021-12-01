// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `999998999`.split('\n')

const target = input[0].split('').map(Number)

const answer = target.sort((a, b) => b - a)

console.log(answer.join(''));

