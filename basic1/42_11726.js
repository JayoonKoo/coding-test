// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `9`.trim().split('\n');

const N = Number(input[0]);
const div = 10007;

function sol() {
	let d = [1, 1];
	for (let i=2; i<=N; i++) {
		d[i] = d[i-2] + d[i-1];
		d[i] %= div;
	}

	return d[N];
}

console.log(sol());
