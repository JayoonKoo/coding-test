// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = `5 8 4`.split('\n');

const sol = (input) => {
	input = input[0].split(' ');
	let [A, B, C] = input.map(e => +e);
	let ans = `${(A+B)%C} \n`;
	ans += `${((A%C) + (B%C))%C} \n`;
	ans += `${(A*B)%C} \n`;
	ans += `${((A%C) * (B%C))%C}`;

	return ans;
}

console.log(sol(input));
