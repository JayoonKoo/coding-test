// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `20 2`.split("\n");

const [N, K] = input[0].split(" ").map(Number);

const d = [];
for (let i = 0; i <= K; i++) {
  d.push(new Array(N + 1).fill(BigInt(0)));
}
d[0][0] = BigInt(1);

const mod = BigInt(1000000000);

function sol() {
	for (let i=1; i<=K; i++) {
		for (let j=0; j<=N; j++) {
			for (let k=0; k<=j; k++) {
				d[i][j] += d[i-1][j-k];
				d[i][j] %= mod;
			}
		}
	}

	return String(d[K][N] % mod);
}

console.log(sol());
