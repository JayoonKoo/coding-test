// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let input = `14
push 1
push 2
top
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
top`.trim().split('\n');

const sol = (input) => {
	let N = +input[0];
	let ans = [];
	let stack = [];
	for (let i =1; i <=N; i++) {
		let target = input[i];
		if (target === 'pop') {
			if (stack.length === 0) {
				ans.push(-1);
			} else ans.push(+stack.pop());
		} else if (target === 'size') {
			ans.push(stack.length);
		} else if (target === 'empty') {
			if (stack.length === 0) {
				ans.push(1);
			} else ans.push(0);
		} else if (target === 'top') {
			if (stack.length === 0) {
				ans.push(-1);
			} else ans.push(+stack[stack.length -1]);
		} else {
			let value = target.split(' ')[1];
			stack.push(+value);
		}
	}
	return ans;
}

console.log(sol(input).join('\n'));