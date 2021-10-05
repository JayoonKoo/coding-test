// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = `-13`.split('\n');

const sol = (input) => {
	let n = +input[0];
	let answer = "";

	if (n===0) {
		return '0';
	}

	while (n != 0) {
		if (n%2 === 0) {
			answer = '0' + answer;
			n /= -2;
		} else {
			answer = '1' + answer;
			n = Math.floor((n-1) / -2);
		}
	}
	return answer;
}

console.log(sol(input));
