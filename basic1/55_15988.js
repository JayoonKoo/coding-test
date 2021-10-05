// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = `3
4
7
10`.split("\n");

const mod = 1000000009;
const T = Number(input.shift());
const maxN = Math.max(...input);

function sol() {
	const d = new Array(maxN+1).fill(0);
	d[0] = 1;
	d[1] = 1;
	d[2] = 2;
	d[3] = 4;

	for (let i=4; i<=maxN; i++) {
		d[i] = (d[i-1] + d[i-2] + d[i-3]) % mod;
	}

	const answer = [];
	for (let n of input) {
		answer.push(d[n]%mod);
	}

	return answer.join('\n');
}

console.log(sol());
