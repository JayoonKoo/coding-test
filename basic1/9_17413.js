// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let input = `<ab cd>fe hg<ij kl>`.trim().split('\n');

const setReverse = (word, ans) => {
	let reverse = "";
	for (let j=word.length-1; j>=0; j--) {
		reverse += word[j];
	}
	ans += reverse;
	word = "";

	return [word, ans];
}

const sol = (input) => {
	const str = input[0];
	let tag = false;
	let ans = "";
	let word = "";
	for (let i=0; i<str.length; i++) {
		let target = str[i];
		if (target === '<') tag= true;

		if (tag) {
			if (word.length !== 0) {
				[word, ans] = setReverse(word, ans);
			}
			ans += target;
		} else {
			if (target === ' ' && word.length !==0) {
				[word, ans] = setReverse(word, ans);
				ans += ' ';
				continue;
			}
			word += target;
		}

		if (target === '>') tag = false;
	}
	if (word.length !== 0) {
		[word, ans] = setReverse(word, ans);
	}
	return ans;
}

console.log(sol(input));