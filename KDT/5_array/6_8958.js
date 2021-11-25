// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `5
OOXXOXXOOO
OOXXOOXXOO
OXOXOXOXOXOXOX
OOOOOOOOOO
OOOOXOOOOXOOOOX`.split('\n')

const N = Number(input[0])

const answer = []
for (let i=1; i<=N; i++) {
	const target = input[i].split('')
	let add = 0
	let scoreSum = 0

	target.forEach((score, i) => {
		if (score === 'O') {
			add += 1
			scoreSum += add
		} else {
			add = 0
		}
	})

	answer.push(scoreSum)
}

console.log(answer.join('\n'))
