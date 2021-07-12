// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = `24 18`.split('\n');

const sol = (input) => {
	let [A, B] = input[0].split(' ').map(e => +e);
	let gcd = calcGcd(A, B);
	let lcm = (A * B) / gcd;
	let ans = [gcd, lcm];
	return ans.join('\n');
}

function calcGcd(A, B) {
	if (A % B === 0) {
		return B;
	}
	return calcGcd(B, A % B);
}

console.log(sol(input));
