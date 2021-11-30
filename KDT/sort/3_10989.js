// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `10
5
2
3
1
4
2
3
5
1
7`.split('\n')

input.shift()
const answer = input.map(Number).sort((a,b) => a - b)

console.log(answer.join('\n'))


