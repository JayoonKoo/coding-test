// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = `baekjoon`.split('\n');

const sol = (input) => {
	input = input[0];
	let ans = [];
	for (let i = 0; i <input.length; i++) {
		ans.push(input.slice(i));
	}
	return ans.sort().join('\n');
}

console.log(sol(input));
