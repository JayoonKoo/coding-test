// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = `0`.split('\n');

const sol = (input) => {
	let N = +input[0];
	let ans = calcFactorial(N);
	return ans;
}

function calcFactorial(N) {
	if (N === 0 || N === 1) {
		return 1;
	}
	return N * calcFactorial(N-1);
}


console.log(sol(input));
