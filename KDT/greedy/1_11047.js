// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `10 4200
1
5
10
50
100
500
1000
5000
10000
50000`.split('\n')

let [N, K] = input[0].split(' ').map(Number)

let totalCount = 0
for (let i=N; i >=1; i--) {
	const target = Number(input[i])
	if (target <= K) {
		const coinCount = Math.floor(K / target)
		totalCount += coinCount
		K -= target * coinCount
	}
}

console.log(totalCount);
