// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = `3
4 10 20 30 40
3 7 5 12
3 125 15 25`.split('\n');

const sol = (input) => {
	const T = +input[0];
	let answer = [];
	for (let i = 1; i <=T; i++) {
		let [n, ...target] = input[i].split(' ').map(e=> +e);
		let ans = 0;
		for (let j=0; j<n; j++) {
			let a = +target[j];
			for (let k=j; k<n-1; k++) {
				let b = +target[k+1];
				ans += calcGcd(a, b);
			}
		}
		answer.push(ans);
	}
	return answer.join('\n');
}

function calcGcd(A, B) {
	if (A % B === 0) {
		return B;
	}
	return calcGcd(B, A%B);
}

console.log(sol(input));
