// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `5
3 1 4 3 2`.split("\n");

input.shift();
let answer = 0;
input[0].split(" ").map(Number).sort((a, b) => a - b).reduce((a, b) => {answer += a + b; return a + b }, 0);
console.log(answer);
