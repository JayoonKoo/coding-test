// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = `6`.split('\n');

const sol = (input) => {
	let N = +input[0];
	let answer = [];

	if (N === 1) return;

	let i =2;
	while(N > 1) {
		if (N % i === 0) {
			answer.push(i);
			N /= i;
		} else {
			i++;
		}
	}

	return answer.join('\n');
}

console.log(sol(input));
