// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `71`

const isEnd = (splitArr) => {
	return Number(input) === Number(splitArr.join(''))
}

let inputSplitArr;

if (Number(input) < 10) {
	inputSplitArr = [0, Number(input)]
} else {
	inputSplitArr = input.split('').map(Number)

}
let nextRight = inputSplitArr.reduce((a, b)=> a+b) % 10


inputSplitArr[0] = inputSplitArr[1]
inputSplitArr[1] =  nextRight

let count = 1;
while(!isEnd(inputSplitArr)) {
	if (count === 61) break;
	nextRight = inputSplitArr.reduce((a, b)=> a+b) % 10
	inputSplitArr[0] = inputSplitArr[1]
	inputSplitArr[1] =  nextRight
	count += 1
}

console.log(count);



