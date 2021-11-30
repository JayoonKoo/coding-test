// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `5
-1
-2
-3
-1
-2`.split('\n')

input.shift()
const target = input.map(Number).sort((a,b) => a - b)

const map = new Map() 
target.forEach(item  => {
	if (map.has(item)) map.set(item, map.get(item) + 1)
	else map.set(item, 1)
})
const mostVale = [...map.entries()].sort((a, b) => b[1] - a[1])[0][1];
const mosts = Array.from(map).filter(d => d[1] === mostVale)
const most = mosts.length === 1 ? mosts[0][0] : mosts[1][0]

const answer = {
	m: (target.reduce((a, b) => a+ b) / target.length).toFixed(),
	c: target[Math.floor(target.length / 2)],
	most,
	range: target[target.length-1] - target[0]
}

console.log(`${answer.m}
${answer.c}
${answer.most}
${answer.range}`)


