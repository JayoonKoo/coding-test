// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = `3 16`.split('\n');

const sol = (input) => {
	const [M, N] = input[0].split(' ').map(e => +e);

	let ans = new Array(N + 1).fill(1);

	ans[0] = -1;
	ans[1] = -1;

	for (let i=0; i <= N; i++) {
		if (ans[i] === -1) continue;

		for (let j=i; i*j <= N; j++) {
			if (ans[i*j] === -1) continue;
			ans[i*j] = -1;
		}
	}

	let answer = [];
	for (let i = M; i <= N; i++) {
		if (ans[i] === 1) answer.push(i);
	}
	return answer.join('\n');
}


console.log(sol(input));
