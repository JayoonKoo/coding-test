// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = `5
6
8
10
12
100`.split('\n');

const sol = (input) => {
	const T = +input[0];
	const primArr = getPrim();
	let answer = [];

	for (let i = 1; i <= T; i++) {
		const N = +input[i];
		let length = Math.floor(N/2);
		let ans = 0;
		for (let j=2; j <= length; j++) {
			if (primArr[j] === -1) continue;
			let m = N - j;
			if (primArr[m] === -1) continue;
			ans += 1;
		}
		answer.push(ans);
	}

	return answer.join("\n");
}

function getPrim() {
	const N = 1000001;
	let primArr = new Array(N).fill(1);

	primArr[0] = primArr[1] = -1;

	for (let i = 0; i <= N; i++) {
		if (primArr[i] === -1) continue;

		for (let j = i; i*j <= N; j++) {
			if (primArr[i*j] === -1) continue;
			primArr[i*j] = -1;
		}
	}

	return primArr;
}

console.log(sol(input));
