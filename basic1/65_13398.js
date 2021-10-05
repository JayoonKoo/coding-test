// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `10
10 -4 3 1 5 6 -35 12 21 -1`.split('\n');

const N = Number(input[0]);
const A = input[1].split(' ').map(Number);

const sol = () => {
	if (N === 1) return A[0];
	const dl = new Array(N).fill(0);
	dl[0] = A[0];
	const dr = new Array(N).fill(0);
	dr[N-1] = A[N-1];

	for (let i=1; i<N; i++) {
		dl[i] = A[i];
		if (dl[i] < dl[i-1] + A[i]) {
			dl[i] = dl[i-1] + A[i];
		}
	}

	for (let i=N-2; i>-1; i--) {
		dr[i] = A[i];
		if (dr[i] < dr[i+1] + A[i]) {
			dr[i] = dr[i+1] + A[i];
		}
	}

	let ans = Math.max(...dl);
	for (i=1; i<N-1; i++) {
		if (ans < dl[i-1] + dr[i+1]) {
			ans = dl[i-1] + dr[i+1];
		}
	}

	return ans;
}

console.log(sol());
