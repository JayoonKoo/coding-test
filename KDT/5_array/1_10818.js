// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `5
20 10 35 30 7`.split('\n')

const arr = input[1].split(' ')

const min = arr.reduce((a, b)=> Math.min(Number(a), Number(b)))
const max = arr.reduce((a, b)=> Math.max(Number(a), Number(b)))

console.log(`${min} ${max}`)


