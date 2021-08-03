// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `12`.split('\n');
const N = Number(input[0]);
const div = 10007;

function sol() {
	d = [1, 1, 3];
	for (let i=3; i<=N; i++) {
		d[i] = 2*d[i-2] + d[i-1];
		d[i] %= div;
	}

	return d[N];
}


console.log(sol(input));
