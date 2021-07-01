// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = `baekjoon`.trim().split('\n');

const sol = (input) => {
	const str = input[0];
	let ans = new Array(26).fill(0);
	for (let c of str) {
		ans[c.charCodeAt(0) - 97] += 1;
	}
	return ans.join(' ');
}

console.log(sol(input));
