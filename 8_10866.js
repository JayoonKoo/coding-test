// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let input = `15
push_back 1
push_front 2
front
back
size
empty
pop_front
pop_back
pop_front
size
empty
pop_back
push_front 3
empty
front`.trim().split('\n');

const sol = (input) => {
	const N = +input[0];
	let dequeue = [];
	let ans = [];
	for (let i=1; i<=N; i++) {
		let target = input[i];
		if (target === 'pop_front') {
			if (dequeue.length === 0) {
				ans.push(-1);
				continue;
			}
			ans.push(dequeue.shift());
		} else if (target === 'pop_back') {
			if (dequeue.length === 0) {
				ans.push(-1);
				continue;
			}
			ans.push(dequeue.pop());
		} else if (target === 'size') {
			ans.push(dequeue.length);
		} else if (target === 'empty') {
			if (dequeue.length === 0) {
				ans.push(1);
				continue;
			}
			ans.push(0);
		} else if (target === 'front') {
			if (dequeue.length === 0) {
				ans.push(-1);
				continue;
			}
			ans.push(dequeue[0]);
		} else if (target === 'back') {
			if (dequeue.length === 0) {
				ans.push(-1);
				continue;
			}
			ans.push(dequeue[dequeue.length -1]);
		} else {
			let [command, value] = target.split(' ');
			if (command === 'push_back') {
				dequeue.push(value);
			} else {
				dequeue.unshift(value);
			}
		}
	}
	return ans.join('\n');
}

console.log(sol(input));