// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `6
10 30 10 20 20 10`.split('\n');

const N = Number(input[0]);
const A = input[1].split(' ').map(Number);

const sol = () => {
	const d = new Array(N).fill(1);

	if (N === 1) return 1;

	for (let i=0; i<N; i++) {
		
		for (let j=0; j<i; j++) {
			const isLong = d[j] + 1;
			if (A[i] < A[j] && isLong > d[i]) {
				d[i] = isLong;
			}
		}
	}

	return Math.max(...d);
}

console.log(sol());
