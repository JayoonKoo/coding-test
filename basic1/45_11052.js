// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `4
1 5 6 7`.split('\n');

function sol() {
	let [N, P] = [...input];
	N = Number(N);
	P = P.split(' ').map(Number);
	P.unshift(0);
	d = new Array(N + 1).fill(0);
	for (let i=1 ; i<=N; i++) {
		for (let j=1; j<=i; j++) {
			d[i] = Math.max(d[i], d[i-j] + P[j]);
		}
	}
	return d[N];
}


console.log(sol(input));
