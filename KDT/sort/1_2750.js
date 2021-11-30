// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `5
5
2
3
4
1`.split('\n')

input.shift()
const answer = input.map(Number).sort((a, b) => b - a)

console.log(answer.join('\n'))


