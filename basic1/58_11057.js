// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `3`.split('\n');

const N = Number(input[0]);
const MOD = 10007;

const sol = () => {
	const d = [];

	for (let i=0; i<=N; i++) {
		d.push(new Array(10).fill(0));
	}

	d[1] = new Array(10).fill(1);

	for (let i=2; i<=N; i++) {
		for (let j=0; j<=9; j++) {
			for (let k=0; k <=j; k++) {
				d[i][j] += d[i-1][k];
			}
			d[i][j] %= MOD;
		}
	}

	let answer = 0;
	d[N].forEach(num => answer += num);
	return answer % MOD;
}

console.log(sol());
