// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `4
2 3 1
5 2 4 1`.split("\n");

const dist = input[1].split(' ').map(Number)
const city = input[2].split(' ').map(Number)
let answer = 0

for (let i =0; i< city.length -1;) {
	const price = city[i]
	const shoudBuy = [dist[i]]

	while (i < city.length) {
		i += 1
		if (price >= city[i]) {
			break
		}
		shoudBuy.push(dist[i])
	}
	answer += price * shoudBuy.reduce((a, b) => a+b)
}

console.log(answer);
