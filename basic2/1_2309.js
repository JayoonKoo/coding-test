// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `20
7
23
19
10
15
25
8
13`.split('\n');

const nine = input.map(Number);

const isNanjang = (key) => {
	return key === 100;
}

function sol() {
	for (let i=0; i<9; i++) {
		const eight = nine.filter((nan, index) => index !== i);
		for (let j=0; j<8; j++) {
			const seven = eight.filter((nan, index) => index !== j);
			const key = seven.reduce((prev, current) =>{
				return prev + current;
			}, 0)

			if (isNanjang(key)) {
				return seven.sort((a, b) => {
					return a - b
				}).join('\n');
			}
		}
	}
}

console.log(sol());
