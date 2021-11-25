// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91`.split('\n')

const C = Number(input[0])

const answer = []
for (let i=1; i<=C; i++) {
	const target = input[i].split(' ').map(Number)
	const N = target.shift()
	const ave = target.reduce((a, b) => a+b)/N
	const aveFlowPercent = (target.filter(score => score > ave).length /N ) * 100
	answer.push(`${aveFlowPercent.toFixed(3)}%`)
}
console.log(answer.join('\n'))

