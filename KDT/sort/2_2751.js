// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `5
5
2
3
4
1`.split('\n')

input.shift()
const quickSort = (list) => {
	if (list.length <= 1) return list
	const left = []
	const right = []
	const pivot = list[0]
	for (let i=1; i<list.length; i++) {
		if (list[i] < pivot) left.push(list[i])
		else right.push(list[i])
	}
	return [...quickSort(left), pivot, ...quickSort(right)]
}

const answer = quickSort(input)

console.log(answer.join('\n'))


