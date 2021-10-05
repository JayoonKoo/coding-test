// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = `baekjoon`.trim().split('\n');

const sol = (input) => {
	const str = input[0];
	let ans = new Array(26).fill(-1);
	let i = 0;
	for (let c of str) {
		let index = c.charCodeAt(0) - 97;
		if (ans[index] === -1) ans[index] = i;
		i ++;
	}
	return ans.join(' ');
}

console.log(sol(input));
