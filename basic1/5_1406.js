// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let input = `abc
9
L
L
L
L
L
P x
L
B
P y`.trim().split('\n');

const sol = (input) => {
	const str = input[0];
	const M = +input[1];
	let right = [];
	let left = str.split('');
	for (let i=2; i<=M+1; i++) {
		let t = input[i];
		if (t === 'L') {
			if (left.length === 0) continue;
			right.push(left.pop());
		} else if (t === 'D') {
			if (right.length === 0) continue;
			left.push(right.pop());
		} else if (t === 'B') {
			if (left.length === 0) continue;
			left.pop();
		} else {
			let c = t.split(' ')[1];
			left.push(c);
		}
	}
	return left.join('') + right.reverse().join('');
}

console.log(sol(input));


