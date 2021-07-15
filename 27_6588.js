// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = `8
20
42
0`.split('\n');

const sol = (input) => {
	prime = caclPrime();
	let answer = [];

	for (let n of input) {
		n = +n;
		if (n === 0) continue;
		for (let i = 3; i < n; i += 2) {
			let j = n - i;
			if (j <= 2) continue;
			if (prime[i] === -1 || prime[j] === -1) continue;
			answer.push(`${n} = ${i} + ${j}`);
			break;
		}
	}

	return answer.join('\n');
}


function caclPrime() {
	const maxN = 1000000;
	let prime = new Array(maxN + 1).fill(1);
	prime[0] = -1;
	prime[1] = -1;

	for (let i = 2; i <= maxN; i++) {
		if (prime[i] === -1) continue;
		for (let j = i; i*j <= maxN; j++) {
			if (prime[i*j] === -1) continue;
			prime[i*j] = -1;
		}
	}

	return prime;
}


console.log(sol(input));
