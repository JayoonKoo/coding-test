// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let input = `3
((
))
())(()`.trim().split('\n');

const sol = (input) => {
	const T = +input[0];
	let ans = [];
	loop1:
	for (let i=1; i<=T; i++) {
		let stack = [];
		let target = input[i];
		for (let c of target) {
			if (c === '(') {
				stack.push(c);
			} else {
				if (stack.length === 0) {
					ans.push('NO');
					continue loop1;
				} 
				stack.pop()
			}
		}
		if (stack.length === 0) {
			ans.push('YES');
		} else ans.push('NO');
	}
	return ans.join('\n');
}

console.log(sol(input));

