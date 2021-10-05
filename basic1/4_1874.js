// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let input = `5
1
2
5
3
4`.trim().split('\n');

const sol = (input) => {
	const n = +input[0];
	let ans = [];
	let stackNum = 1;
	let stack = [];
	let a = [];
	for (let i=1; i<=n; i++) {
		const target = +input[i];
		if (a.length !== 0) {
			if (target < a[a.length -1] && target < stack[stack.length -1]) {
				return 'NO'
			}
		}
		while (stackNum <= target) {
			stack.push(stackNum++);
			ans.push('+');
		}
		if (stack.length !== 0) {
			a.push(stack.pop());
			ans.push('-');
		} 
	}
	return ans;
}

ans = sol(input);
if (ans === 'NO') {
	console.log(ans);
} else {
	console.log(ans.join('\n'));
}

