// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `11
1 4
3 5
0 6
5 7
3 8
5 9
6 10
8 11
8 12
2 13
12 14`.split('\n')

input.shift()
const target = input.map(item => item.split(' ').map(Number))
target.sort((a, b) => {
	if (a[1] === b[1]) {
		return a[0] - b[0]
	} 
	return a[1] - b[1]
})

const answer = []
target.forEach((item, i) => {
	if (i === 0) return answer.push(item)
	if (item[0] >= answer[answer.length -1][1]) answer.push(item)
})
console.log(answer.length);
