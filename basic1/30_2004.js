// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = `25 12`.split('\n');

const sol = (input) => {
	const [N, M] = input[0].split(' ').map(e=> +e);
	let two = getCount(N, 2) - (getCount(M, 2) + getCount(N-M, 2));
	let five = getCount(N, 5) - (getCount(M, 5) + getCount(N-M, 5));
	return Math.min(two, five);
}

function getCount(number, div) {
	let count = 0;
	const ddiv = div;
	while(number >= div) {
		count += parseInt(number / div);
		div *= ddiv;
	}
	return count;
}



console.log(sol(input));
