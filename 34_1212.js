// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = `314`.split('\n');

const sol = (input) => {
	input = input[0];
	let answer = parseInt(input[0], 8).toString(2);
	input = input.slice(1);
	for (let number of input) {
		answer += parseInt(number, 8).toString(2).padStart(3, '0');
	}
	return answer;
}

console.log(sol(input));
