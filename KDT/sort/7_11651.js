// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `5
0 4
1 2
1 -1
2 2
3 3`.split('\n')

input.shift()

const target = input.map(item => item.split(' ').map(Number))
const answer = target.sort((a, b) => {
	if (a[1] === b[1]) {
		return a[0] - b[0]
	} else {
		return a[1] - b[1]
	}
})

let answerStr = ""
answer.forEach(item => answerStr += `${item[0]} ${item[1]}\n`)

console.log(answerStr);
