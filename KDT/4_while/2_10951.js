// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `1 1
2 3
3 4
9 8
5 2`.split("\n");

const answer = input.map(item => item.split(' ').map(Number).reduce((a, b) => a + b))

console.log(answer.join('\n'))
