// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `4
3 5 15 16`.split('\n');

const N = Number(input[0]);
const cards = [0, ...input[1].split(' ').map(Number)];

function sol() {
	let d = new Array(N+1).fill(0);

	for (let i=1; i<=N; i++) {
		for (let j=1; j<=i; j++) {
			if (d[i] === 0) {
				d[i] = d[i-j] +cards[j];
				continue;
			}
			d[i] = Math.min(d[i], d[i-j] + cards[j]);
		}
	}

	return d[N];
}


console.log(sol(input));
