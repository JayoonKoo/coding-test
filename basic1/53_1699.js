// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `11`.split('\n');

let N = Number(input[0]);

function sol() {
	const d = new Array(N+1).fill(0);

	for (let i=0; i<=N; i++) {
		d[i] = i;
		for (let j=1; j*j <= i; j++) {
			d[i] = Math.min(d[i], d[i - j*j] +1);
		}
	}

	return d[N];
}


console.log(sol());
