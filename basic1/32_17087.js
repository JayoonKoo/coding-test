// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = `1 1
1000000000`.split('\n');

const sol = (input) => {
	const [n, s] = input[0].split(' ').map(e=>+e);
	input = input[1].split(' ').map(e=> {
		t = +e - s;
		return t < 0 ? -t : t;
	});

	let gcd = 0;
	input.forEach(t => gcd = caclGcd(gcd, t))

	return gcd;
}

function caclGcd(A, B) {
	if (A % B === 0) {
		return B;
	}
	return caclGcd(B, A%B);
}


console.log(sol(input));
