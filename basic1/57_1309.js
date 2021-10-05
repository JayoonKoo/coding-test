// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `4`.split('\n');
const mod = 9901;

const N = Number(input[0]);

const sol = () => {
	const d = [];
	for (let i =0; i <=N; i++) {
		d.push(new Array(3).fill(0));
	}
	d[0] = [1, 0, 0];

	for (let i=1; i<=N; i++) {
		d[i][0] = (d[i-1][0] + d[i-1][1] + d[i-1][2]) % mod;
		d[i][1] = (d[i-1][0] + d[i-1][2]) % mod;
		d[i][2] = (d[i-1][0] + d[i-1][1]) % mod;
	}

	const [zero, one, two] = d[N];

	return (zero + one + two) % mod;
}

console.log(sol());
