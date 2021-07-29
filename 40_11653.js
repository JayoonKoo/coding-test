// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = `72`.split('\n');

const sol = (input) => {
	let N = +input[0];
	let ans = "";

	if (N === 1) return 0;

	for (let i = 2; i<=N**(1/2); i++) {
		while(N % i === 0) {
			ans += `${i}\n`;
			N /= i;
		}
	}

	if (N !== 1) ans += `${N}`;
	return ans;
}

console.log(sol(input));
