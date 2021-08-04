// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `3
4
7
10`.split('\n');
const N = Number(input.shift());
const maxInput = Math.max(...input);

function sol() {
	d = [1, 1, 2];
	for(let i=3; i<=maxInput; i++) {
		d[i] = d[i-3] + d[i-2] + d[i-1];
	}

	return input.map(e=> d[e]).join('\n');
}


console.log(sol(input));
