// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = `5`.split('\n');

const sol = (input) => {
	let N = +input[0];
	let div = 5;
	let count = 0;
	while (N >= div) {
		count += parseInt(N/div);
		div *= 5;
	}

	return count;
}



console.log(sol(input));
