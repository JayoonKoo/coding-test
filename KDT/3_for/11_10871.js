// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `10 5
1 10 4 9 2 3 8 5 7 6`.split("\n");

const [N, X] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(Number)

const answer = arr.filter(a => a < X)

console.log(answer.join(' '))
