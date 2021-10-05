// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = `Baekjoon Online Judge`.split('\n');

const sol = (input) => {
	let str = input[0];
	let ans = "";
	const reg = /[A-Za-z]/g;
	for (let c of str) {
		if (!c.match(reg)) {
			ans += c;
			continue;
		}
		let charCode = c.charCodeAt(0) + 13;
		if ((charCode >= 91 && charCode <= 103) || (charCode >=123 && charCode <=135)) charCode -=26;
		ans += String.fromCharCode(charCode);
	}
	return ans;
}

console.log(sol(input));
