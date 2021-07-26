// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = `60466175 36`.split('\n');

const sol = (input) => {
	const [N, B] = input[0].split(' ').map(e => +e);
	
	return N.toString(B).toUpperCase();
}

console.log(sol(input));
