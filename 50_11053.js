// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `6
10 20 10 30 20 50`.split('\n');

const N = Number(input[0]);
const A = input[1].split(' ').map(Number);

function sol() {
	let d = new Array(N).fill(1);

	for (let i=0; i<N; i++) {
		const target = A[i];
		for (let j=0; j<i; j++) {
			if (target <= A[j]) continue;
			if (d[i] < d[j] + 1) d[i] = d[j] + 1;
		}
	}

	return Math.max(...d);
}

console.log(sol());
