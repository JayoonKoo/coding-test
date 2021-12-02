// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `10+20+30+40`.split("\n");

const regMinus = /\-/;
const regPlus = /\+/;
const target = input[0].split(regMinus);

let answer = 0
target.forEach((item, i) => {
	if (item.match(regPlus)) {
		const sum = item.split(regPlus).map(Number).reduce((a,b) => a+b)
		i === 0 ? answer += sum : answer -= sum
	} else {
		i === 0 ? answer += Number(item) : answer -= Number(item)
	}
})

console.log(answer);


