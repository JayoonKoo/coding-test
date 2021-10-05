// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = `ZZZZZ 36`.split('\n');

const sol = (input) => {
	const [B, N] = input[0].split(' ');
	
	return parseInt(B,N);
}

console.log(sol(input));
