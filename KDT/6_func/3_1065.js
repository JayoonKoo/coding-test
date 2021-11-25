// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `1000`.split('\n')
const N = Number(input[0])

let answer = 0
for (let i=1; i<=N; i++) {
	const target = String(i)
	if (target.length === 1 || target.length === 2) answer += 1
	else {
		const d = target[0] - target[1]
		const find = target.split('').find((item, index) => {
			if (index === 0) return
			if (Number(item) + d !== Number(target[index-1])) {
				return true
			}
		})
		

		if (find) continue
		answer += 1
	}
}

console.log(answer);
