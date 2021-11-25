// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `150
266
427`.split('\n')

const target = String(input.reduce((a, b) => Number(a) * Number(b), 1))

const answer = new Array(10).fill(0)

for (let b of target) {
	answer[b] += 1
}

console.log(answer.join('\n'))




