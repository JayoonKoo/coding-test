const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = 0

rl.on("line", function (line) {
	N = line
}).on("close", function () {
	let answer = 0
	for (let i=1; i<=N; i++) {
		answer += i
	}
	console.log(answer);
});




