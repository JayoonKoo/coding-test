// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let input = `15
push 1
push 2
front
back
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
front`.trim().split('\n');

const sol = (input) => {
	const N = +input[0];
	let queue = [];
	let ans = [];
	for (let i=1; i<=N; i++) {
		let target = input[i];
		if (target === 'pop') {
			if (queue.length === 0) {
				ans.push(-1);
				continue;
			}
			ans.push(queue.shift());
		} else if (target === 'size') {
			ans.push(queue.length);
		} else if (target === 'empty') {
			if (queue.length === 0) {
				ans.push(1);
				continue;
			}
			ans.push(0);
		} else if (target === 'front') {
			if (queue.length === 0) {
				ans.push(-1);
				continue;
			}
			ans.push(queue[0]);
		} else if (target === 'back') {
			if (queue.length === 0) {
				ans.push(-1);
				continue;
			}
			ans.push(queue[queue.length -1]);
		} else {
			let value = target.split(' ')[1];
			queue.push(value);
		}
	}
	return ans.join('\n');
}

console.log(sol(input));


