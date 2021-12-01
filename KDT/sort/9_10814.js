// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `3
21 Junkyu
21 Dohyun
20 Sunyoung`.split('\n')

input.shift()
const target = input.map(item => item.split(' '))
const answer = target.sort((a, b) => a[0] - b[0])

let answerStr = ""
answer.forEach(item => answerStr += `${item[0]} ${item[1]}\n`)
console.log(answerStr);
