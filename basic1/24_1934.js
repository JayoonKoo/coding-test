// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = `3
1 45000
6 10
13 17`.split('\n');

const sol = (input) => {
	const T = +input[0];
	let ans = [];
	let gcd;
	for (let i = 1; i < input.length; i++) {
		let [A, B] = input[i].split(' ').map(e => +e);
		gcd = calcGcd(A, B);
		ans.push((A * B) / gcd);
	}
	return ans.join('\n');
}

function calcGcd(A, B) {
	if (A%B === 0) {
		return B;
	}
	return calcGcd(B, A%B);
}

console.log(sol(input));
