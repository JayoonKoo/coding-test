// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = `10 20 30 40`.split('\n');

const sol = (input) => {
	input = input[0].split(' ');
	const ab = `${input[0]}${input[1]}`;
	const cd = `${input[2]}${input[3]}`;
	return +ab + +cd;
}

console.log(sol(input));
