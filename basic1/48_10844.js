// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `2`.split('\n');

const N = Number(input[0]);
const div = 1000000000;

function sol() {
	const d = [];
	if (N === 1) return 9;
	for (let i = 0; i<=N; i++) {
		d.push(new Array(10).fill(0));
	}
	d[1] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];

	for (let i = 2; i<=N; i++) {
		for (let j=0; j<=9; j++) {
			if (j === 0) {
				d[i][j] = d[i-1][j+1] % div;
				continue;
			}
			if (j === 9) {
				d[i][j] = d[i-1][j-1] % div;
				continue;
			}
			d[i][j] = (d[i-1][j-1] + d[i-1][j+1]) % div;
		}
	}

	let answer = 0;
	d[N].forEach(n => answer += n);

	return answer% div;
}

console.log(sol());
