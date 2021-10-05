// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `2
5
50 10 100 20 40
30 50 70 10 60
7
10 30 10 50 100 20 40
20 40 30 50 60 20 80`.split('\n');

const T = Number(input[0]);

const sol = () => {
	const answer = [];
	for (let i=1; i<input.length; i+=3) {
		const N = Number(input[i]);
		const d = [];
		for (let j = 0; j<N; j++) {
			d.push(new Array(3).fill(0));
		}

		const input1 = input[i+1].split(' ').map(Number);
		const input2 = input[i+2].split(' ').map(Number);
		d[0] = [0, input1[0], input2[0]];
		
		for (let j=1; j<N; j++) {
			const [prev0, prev1, prev2] = d[j-1];
			d[j][0] = Math.max(prev0, prev1, prev2)
			d[j][1] = Math.max(prev0+input1[j], prev2+input1[j]);
			d[j][2] = Math.max(prev0+input2[j], prev1+input2[j]);
		}


		answer.push(Math.max(...d[N-1]));
	}

	return answer.join("\n");
}

console.log(sol());
