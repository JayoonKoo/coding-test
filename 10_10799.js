// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let input = `()(((()())(())()))(())`.trim().split('\n');

const sol = (input) => {
	const str = input[0];
	let stack = [];
	ans = 0;
	for (let i=0; i<str.length; i++) {
		let p = str[i];
		if (p === '(') {
			stack.push('(');
		} else {
			let tmp = str[i-1];
			stack.pop();
			if (tmp === '(') {
				ans += stack.length;
			} else {
				ans += 1;
			}
		}
	}
	return ans;
}

console.log(sol(input));
