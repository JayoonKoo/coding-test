// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = `This is String

SPACE    1    SPACE
 S a M p L e I n P u T     
0L1A2S3T4L5I6N7E8`.split('\n');

input = input.filter(str => str.length > 0);
const sol = (input) => {
	const reUpper = /[A-Z]/g;
	const reSpace = /[\s]/g;
	const reLower = /[a-z]/g;
	const reNumber = /[0-9]/g;
	let answer = [];

	for (let str of input) {
		
		let low = 0;
		let up = 0;
		let num = 0;
		let space = 0;
		for (let c of str) {
			if (c.match(reUpper)) {
				up += 1;
			} else if (c.match(reLower)) {
				low += 1;
			} else if (c.match(reSpace)) {
				space += 1;
			} else if (c.match(reNumber)) {
				num += 1;
			}
		}
		answer.push(`${low} ${up} ${num} ${space}`);
	}
	return answer.join('\n');
}

console.log(sol(input));
