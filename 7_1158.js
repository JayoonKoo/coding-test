// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let input = `7 3`.trim().split('\n');

const sol = (input) => {
	const [N, K] = input[0].split(' ');
	let arr = [];
	for (let i=1; i<=N; i++) {
		arr.push(i);
	}
	i=0;
	ans = [];
	while(arr.length !== 0) {
		i += K-1;
		while (i >= arr.length) i -= arr.length;
		ans.push(arr.splice(i, 1)[0]);
	}
	return `<${ans.join(', ')}>`;
}

console.log(sol(input));