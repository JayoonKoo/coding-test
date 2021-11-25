// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `3
29
38
12
57
74
40
85
61`.split('\n')

const min = input.reduce((a, b) => String(Math.max(Number(a), Number(b))))
const index = input.indexOf(min)+1

console.log(min+"\n"+index)


