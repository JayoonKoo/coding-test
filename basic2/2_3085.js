// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `3
CCP
CCP
PPC`.split("\n");

const N = Number(input.shift());

const candies = input.map(str => str.split(''));


const getMaxCandy = () => {
	let maxCandy = 0;
	let count = 1;
	// 가로
	for (let candy of candies) {
		for (let j=0; j<N; j++) {
			if (candy[j] === candy[j+1]) {
				count += 1;
			} else {
				if (maxCandy < count) maxCandy = count; 
				count = 1;
			}
		}
	}

	// 세로 
	count = 1;
	for (let j=0; j<N; j++) {
		for (let i=0; i<N-1; i++) {
			if (candies[i][j] === candies[i+1][j]) {
				count += 1;
			} else {
				if (maxCandy < count) maxCandy = count;
				count = 1;
			}
		}
		maxCandy = maxCandy < count ? count: maxCandy;
		count = 1;
	}

	return maxCandy;
}

function sol() {
	let maxCandy = getMaxCandy();
	// 가로
	for (let candyRow of candies) {
		for (let j=0; j<N-1; j++) {
			if(candyRow[j] !== candyRow[j+1]) {
				swapRow(candyRow, j);

				const isMax = getMaxCandy();
				maxCandy = maxCandy < isMax ? isMax : maxCandy;

				swapRow(candyRow, j);
			}
		}
	}

	// 세로
	for (let j=0; j<N; j++) {
		for (let i=0; i<N-1; i++) {
			if (candies[i][j] !== candies[i+1][j]) {
				swapCol(i, j);

				const isMax = getMaxCandy();
				maxCandy = maxCandy < isMax ? isMax : maxCandy;

				swapCol(i, j);
			}
		}
	}

	return maxCandy;
}

function swapRow(candyRow, j) {
	const tmp = candyRow[j];
	candyRow[j] = candyRow[j + 1];
	candyRow[j + 1] = tmp;
}

function swapCol(i, j) {
	const tmp = candies[i][j];
	candies[i][j] = candies[i+1][j];
	candies[i+1][j] = tmp;
}

console.log(sol());
