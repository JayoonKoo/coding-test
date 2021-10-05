const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const sol = (input) => {
	const N = +input[0];
	let A = input[1].split(' ');
	let stack = [];
	let ans = new Array(N).fill(-1);

	for (i = 0; i<N; i++) {
		let target = +A[i];
		while( stack.length > 0 && A[stack[stack.length -1]] < target) {
			ans[stack.pop()] = target;
		}
		stack.push(i);
	}

	return ans.join(' ');
}

console.log(sol(input));
