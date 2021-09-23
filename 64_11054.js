// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `10
1 5 2 1 4 3 4 5 2 1`.split('\n');

const N = Number(input[0]);
const A = input[1].split(' ').map(Number);

const sol = () => {
	if (N === 1) return 1;

	const d = new Array(N).fill(0);
	const dLeft = new Array(N).fill(1);
	const dRight = new Array(N).fill(1);

	[dLeft[0], dRight[N-1]] = [1, 1];

	for (let i=1; i <N; i++) {
		for(let j=0; j<i; j++) {
			if (A[j] < A[i] && dLeft[i] < dLeft[j] + 1) {
				dLeft[i] = dLeft[j] + 1;
			}
		}
	}

	d[N-1] = dLeft[N-1];

	for (let i=N-2; i>=0; i--) {
		for (let j=i+1; j<N; j++) {
			if (A[j] < A[i] && dRight[i] < dRight[j] + 1) {
				dRight[i] = dRight[j] + 1;
			}
		}
		d[i] = dLeft[i] + dRight[i] -1;
	}

	d[0] = dRight[0];

	return Math.max(...d);
}

console.log(sol());
