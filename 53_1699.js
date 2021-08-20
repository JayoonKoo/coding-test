// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `7`.split('\n');

let N = Number(input[0]);

function sol() {
	let root = Math.floor(N**(1/2));
	let answer = 0;
	while (root != 1) {
		answer += 1;
		N -= root ** 2;
		root = Math.floor(N**(1/2));
	}
	return answer + N;
}


console.log(sol());
