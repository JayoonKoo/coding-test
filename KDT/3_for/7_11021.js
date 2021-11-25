const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let c = 0
let answer = []

rl.on("line", function (line) {
	if (c !== 0) {
		const [A, B] = line.split(' ').map(Number)
		answer.push(`Case #${c}: ${A+B}`)
	}
	c += 1
}).on("close", function () {
	console.log(answer.join('\n'))
});
