// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = `10`.trim().split('\n');

const sol = (input) => {
	let n = +input[0];

	let d = [0, 0];
	for (let i = 2; i <= n; i++) {
		d[i] = d[i-1] + 1;
		if (i % 2 === 0 && d[i] > d[i/2] + 1) {
			d[i] = d[i/2] + 1;
		}
		if (i % 3 === 0 && d[i] > d[i/3] + 1) {
			d[i] = d[i/3] + 1;
		}
	}

	return d[n];
}

console.log(sol(input));
