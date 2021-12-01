// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `6
1000 999 1000 999 1000 999`.split('\n')

input.shift()
const splitInput = input[0].split(' ').map(Number)
const origin = [...splitInput]

const target = splitInput.sort((a, b) => a - b)
const setTarget = new Set(target)
const board = new Map()
Array.from(setTarget).forEach((item, i) => {
	board.set(item, i)
})

let answerStr = ""
origin.forEach(item => answerStr += `${board.get(item)} `)
console.log(answerStr);


