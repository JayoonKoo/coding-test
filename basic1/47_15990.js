// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = `3
4
7
10`.split('\n');

const T = Number(input.slice(0,1));
const oneTwoThree = input.slice(1, T+1);
const maxN = Math.max(...oneTwoThree);
const div = 1000000009;

function sol() {
	let d = [];
	for (let i=0; i<=maxN; i++) {
		d.push(new Array(4).fill(0));
	}

	for (let i=1; i<=maxN; i++) {
		for (let j=1; j<=3; j++) {
			if (i - j === 0) {
				d[i][j] = 1;
				break;
			}	
			if (j === 1) {
				d[i][j] = d[i-j][2] + d[i-j][3];
			} else if (j === 2) {
				d[i][j] = d[i-j][1] + d[i-j][3];
			} else {
				d[i][j] = d[i-j][1] + d[i-j][2];
			}
			d[i][j] %= div;
		}
	}

	let answer = ""
	oneTwoThree.forEach(index => {
		let target = d[index];
		let ans = 0;
		for (let num of target) {
			ans += num;
		}
		ans %= div;
		answer += `${ans}\n`;
	})
	return answer;
}

console.log(sol());
