// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `10`.split("\n");

const N = Number(input[0]);

const sol = () => {
  if (N === 1) return 0;
  const d = new Array(N + 1).fill(0);
	d[0] = 1;
  d[2] = 3;

  for (let i = 3; i <= N; i++) {
    if (i % 2 === 1) {
      d[i] = 0;
    } else {
      d[i] = d[i - 2] * 3;
			for (let j = i-4; j >= 0; j -=2) {
				d[i] += d[j] * 2;
			}
    }
  }

  return d[N];
};

console.log(sol());
