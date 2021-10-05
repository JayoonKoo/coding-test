// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = `4
1 3 5 7`.split('\n');

const N = +input.shift();
input = input[0].split(' ').map(e=>+e);
const sol = (N, input) => {
	let maxNum = Math.max(...input);
	let ans = new Array(maxNum + 1).fill(1);

	ans[0] = -1;
	ans[1] = -1;

	for (let i = 0; i <= maxNum; i++) {
		if (ans[i] === -1) {
			continue;
		}
		for (let j = i; i * j <= maxNum; j++) {
			ans[i * j] = -1;
		}
	}

	let answer = 0;
	input.forEach(e => {
		if (ans[+e] === 1) answer += 1;
	})

	return answer;
}


console.log(sol(N, input));
