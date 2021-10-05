// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `6
6
10
13
9
8
1`.split('\n');

const wine = input.map(Number);
const N = wine[0];

const sol = () => {
	const d = new Array(N+1).fill(0);
	
	if (N === 1) return Number(input[1]);

	d[1] = wine[1];
	d[2] = d[1] + wine[2];

	for (let i=3; i<=N; i++) {
		const zero = d[i-1];
		const one = d[i-2] + wine[i];
		const two = d[i-3] + wine[i-1] + wine[i];

		d[i] = Math.max(zero, one, two);
	}

	return d[N];

}

console.log(sol());
