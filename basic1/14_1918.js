// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = `A*(B+C)`.trim().split('\n');

priority = {
	"-": 1,
	"+": 1,
	"*": 2,
	"/": 2,
}

const sol = (input) => {
	const reg = /[A-Z]/gm;
	let expression = input[0];
	expression = `(${expression})`;
	let stack = [];
	let ans = "";
	for (let t of expression) {
		if (t === '(') {
			stack.push(t);
		} else if (t.match(reg)) {
			ans += t;
		} else if (t === ')') {
			while (stack.length !== 0) {
				let temp = stack.pop();
				if (temp === '(') break;
				ans += temp;
			}
		} else {
			while (stack[stack.length -1] !== '(' && priority[t] <= priority[stack[stack.length -1]]) {
				ans += stack.pop();
			}
			stack.push(t);
		}
	}
	return ans;
}

console.log(sol(input));
