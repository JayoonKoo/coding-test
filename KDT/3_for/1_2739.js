const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// let input = [];
let N = 0;

rl.on("line", function (line) {
  N = line;
	console.log(`here`, line)
  // input.push(parseInt(line));
}).on("close", function () {
  const answer = [];
  for (let i = 1; i < 10; i++) {
    answer.push(`${N} * ${i} = ${N * i}`);
  }

  console.log(answer.join("\n"));
});

// const input = `2`.split("\n");

// const N = Number(input[0])

// const answer = []
// for (let i=1; i<10; i++) {
// 	answer.push(`2 * ${i} = ${2*i}`)
// }

// console.log(answer.join('\n'))
