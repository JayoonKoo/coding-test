// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `10
1 100 2 50 60 3 5 6 7 8`.split('\n');

const N = Number(input[0]);
const A = input[1].split(' ').map(Number);

const sol = () => {
	const d = new Array(N).fill(0);
	d[0] = A[0];
	if (N === 1) {
		return d[0];
	}

	for (let i=1; i<N; i++) {
		const cur = A[i];
		d[i] = cur;

		for (let j=0; j<i; j++) {
			if (cur > A[j] && d[i] < d[j] + cur) {
				d[i] = d[j] + cur;
			}
		}
	}

	return Math.max(...d);
}

console.log(sol());
