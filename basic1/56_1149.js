// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `3
26 40 83
49 60 57
13 89 99`.split('\n');

const N = Number(input[0]);

const sol = () => {
	const d = [];
	for (let i=0; i<=N; i++) {
		d.push(new Array(3).fill(0));
	}
	d[1] = input[1].split(' ').map(Number);

	for (let i=2; i<=N; i++) {
		const rgb = input[i].split(' ').map(Number);
		d[i][0] = Math.min(rgb[0] + d[i-1][1], rgb[0] + d[i-1][2]);
		d[i][1] = Math.min(rgb[1] + d[i-1][0], rgb[1] + d[i-1][2]);
		d[i][2] = Math.min(rgb[2] + d[i-1][0], rgb[2] + d[i-1][1]);
	}

	return Math.min(...d[N]);
}

console.log(sol());
