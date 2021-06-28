// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = `5
ABC*+DE/-
1
2
3
4
5`.trim().split('\n');

const sol = (input) => {
	const N = +input[0];
	const postfix = input[1];
	let variable = new Set();
	let variabelObj = {};
	let stack = [];

	for (let c of postfix) {
		if (c !== "*" && c !== "-"  && c !=="/" && c !== "+") {
			variable.add(c);
		} 
	}
	let i = 2;
	for (let v of variable) {
		variabelObj[v] = +input[i];
		i++;
	}

	for (let c of postfix) {
		if (c !== "*" && c !== "-" && c !=="/" && c !== "+") {
			stack.push(variabelObj[c]);
		} else {
			if (c === "*") {
				top = stack.pop()
				second = stack.pop()
				stack.push(second * top);
			} else if (c === "-") {
				top = stack.pop()
				second = stack.pop()
				stack.push(second - top);
			} else if (c === "/") {
				top = stack.pop()
				second = stack.pop()
				stack.push(second / top);
			} else {
				top = stack.pop()
				second = stack.pop()
				stack.push(second + top);
			}
		}
	}
	return stack[0].toFixed(2);
}

console.log(sol(input));
