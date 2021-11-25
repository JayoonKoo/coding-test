// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `42
84
252
420
840
126
42
84
420
126`.split('\n')

const answerArr = new Array(1001).fill(0)

const getModArr = input.map(item => String(Number(item) % 42))

for (let i of getModArr) {
	answerArr[i] += 1
}

const answer = answerArr.filter(a => a !== 0)

console.log(answer.length);
