// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `13
but
i
wont
hesitate
no
more
no
more
it
cannot
wait
im
yours`.split('\n')

input.shift()
const target = new Set(input)
const answer = Array.from(target).sort((a, b) => {
	if (a.length === b.length) {
		return a.localeCompare(b)
	} else {
		return a.length - b.length
	}
})

console.log(answer.join('\n'));
