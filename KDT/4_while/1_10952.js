// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `1 1
2 3
3 4
9 8
5 2
0 0`.split("\n");

const answer = input.map(item => item.split(' ').map(Number).reduce((a, b) => a + b))
answer.pop()

console.log(answer.join('\n'))
