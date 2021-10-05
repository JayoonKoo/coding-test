// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let input = `2
I am happy today
We want to win the first prize`.trim().split('\n');

const sol = (input) => {
	let T = +input[0];
	let ans = [];
	let reverse = ""
	for (let i=1; i<=T; i++) {
		let str = [];
		let target = input[i].split(' ');
		target.forEach(word => {
			for (let i=word.length-1; i>=0; i--) {
				reverse += word[i];
			}
			str.push(reverse);
			reverse = "";
		})
		ans.push(str.join(' '));
	}
	return ans;
}

console.log(sol(input).join('\n'));