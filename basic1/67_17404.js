// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `3
26 40 83
49 60 57
13 89 99`.split("\n");

const [N, ...newInput] = input;

const sol = () => {
  const d = [];
  const answer = [];

  for (let i = 0; i <= N; i++) {
    d.push(new Array(3).fill(0));
  }

  const firstRgb = newInput[0].split(" ").map(Number);

  for (let i = 0; i < 3; i++) {
    d[1] = [9999, 9999, 9999];
    d[1][i] = firstRgb[i];

    for (let j = 2; j <= N; j++) {
      const rgb = newInput[j-1].split(" ").map(Number);
      d[j][0] = rgb[0] + Math.min(d[j - 1][1], d[j - 1][2]);
      d[j][1] = rgb[1] + Math.min(d[j - 1][0], d[j - 1][2]);
      d[j][2] = rgb[2] + Math.min(d[j - 1][1], d[j - 1][0]);
    }

		answer.push(...d[N].filter((e, index) => index != i));
  }

  return Math.min(...answer);
};

console.log(sol());
