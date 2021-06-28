// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let input = `7
1 1 2 3 4 2 1`.trim().split('\n');

const sol = (input) => {
	const N = +input[0];
	let A = input[1].split(' ');
	let ans = new Array(N).fill(-1);
	let stack = [];

	let numberBoard = {};
	A.forEach(e => {
		if (numberBoard[e] === undefined) {
			numberBoard[e] = 1;
		} else {
			numberBoard[e] += 1;
		}
	})

	for (let i =0; i<N; i++) {
		let target = A[i];
		while (stack.length >0 && numberBoard[A[stack[stack.length -1]]] < numberBoard[target]) {
			ans[stack.pop()] = target;
		}
		stack.push(i);
	}

	return ans.join(' ');
}

console.log(sol(input));
