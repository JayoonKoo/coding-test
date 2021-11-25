// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = 10000

const answerArr = new Array(10001).fill(0)

const DN = (n) => {
	if (n > 10000) return
	let newN = Number(n)
	for (let num of n) {
		newN += Number(num)
	}
	answerArr[newN] += 1
	DN(String(newN))
}

for (let i=1; i<=N; i ++) {
	DN(String(i))
}

const answer = []
answerArr.forEach((num, i) => {
	if (i === 0) return
	if (num === 0) answer.push(i)
})

console.log(answer.join('\n'))

