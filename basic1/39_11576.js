// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = `17 8
2
2 16`.split('\n');

const sol = (input) => {
	const [A, B] = input[0].split(' ').map(e => +e);
	let m = +input[1];
	let answer = "";
	let numbers = input[2].split(' ').map(e=> +e);

	let ten = 0;
	for (let num of numbers) {
		ten += (num * (A**(m-1)));
		m -= 1;
	}

	while(ten) {
		answer = `${ten % B} ${answer}`;
		ten = parseInt(ten/ B);
	}

	return answer;
}

console.log(sol(input));
