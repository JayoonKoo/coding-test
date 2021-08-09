// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `3`.split('\n');

const N = Number(input[0]);

function sol() {
	const d = [];

	if (N === 1) return 1;

	for (let i=0; i<=N; i++) {
		d.push(new Array(2).fill(BigInt(0)));
	}

	d[1] = [0, 1];

	for (let i = 2; i <=N; i++) {
		d[i][0] = BigInt(d[i-1][0] + d[i-1][1]);
		d[i][1] = BigInt(d[i-1][0]);
	}

	let answer = BigInt(0);
	d[N].forEach(n => answer += n);

	return String(answer);

}

console.log(sol());
