const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let count = 0

rl.on("line", function (line) {
	if (count !== 0) {
		input.push(line)
	}
	count += 1
}).on("close", function () {
	const answer = input.map(item => {
		const [A, B] = item.split(' ').map(Number)
		return A + B
	})

	console.log(answer.join('\n'))
});




