// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `6
10 20 10 30 20 50`.split('\n');

const N = Number(input[0]);
const A = input[1].split(' ').map(Number);

function sol() {
	const d = new Array(N).fill(1);
	const v = new Array(N).fill(-1);

	for (let i=1; i<N; i++) {
		const current = A[i];
		for (let j=0; j<i ; j++) {
			const compare = A[j];
			if (current <= compare) continue;
			if (d[i] < d[j] + 1) {
				d[i] = d[j] + 1;
				v[i] = j;
			}
		}
	}

	const maxLength = Math.max(...d);
	let index = d.indexOf(maxLength);

	let arr = "";
	while (index !== -1) {
		arr = `${A[index]} ${arr}`;
		index = v[index];
	}

	const answer = `${maxLength}\n${arr}`;

	return answer;
}

console.log(sol());
