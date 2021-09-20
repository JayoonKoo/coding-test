// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `5
7
3 8
8 1 0
2 7 4 4
4 5 2 6 5`.split('\n');

const N = Number(input[0]);

const sol = () => {
	const d = new Array(N+1);
	d[1] = [Number(input[1])];

	for (let i=2; i <= N; i++) {
		const prev = d[i-1];
		const pLastIdx = prev.length -1;
		const current = input[i].split(' ').map(Number);
		const cLastIdx = current.length -1;

		current.forEach((num, index) => {
			if (index === 0) {
				d[i] = [prev[0] + num];
			} else if (index === cLastIdx) {
				d[i].push(prev[pLastIdx] + num);
			} else {
				d[i].push(Math.max(prev[index-1] + num, prev[index] + num));
			}
		})
	}

	return Math.max(...d[N]);
}

console.log(sol());
