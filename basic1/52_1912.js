// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = `5
-1 -2 -3 -4 -5`.split('\n');

const N = Number(input[0]);
const arr = input[1].split(' ').map(Number);

const sol = () => {
	const d = [arr[0]];
	for (let i=1; i <N; i++) {
		const [current, preD] = [arr[i], d[i-1]];
		const candidate = [preD + current, current];
		d[i] = Math.max(...candidate);
	}

	return Math.max(...d);
}

console.log(sol());
