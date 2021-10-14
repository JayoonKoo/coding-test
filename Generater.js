const Stream = class {
	static get(v) {return new Stream(v)}
	constructor(v) {
		this.v = v;
		this.filters = [];
	}

	add(gene, ...arg) {
		this.filters.push(v=> gene(v, ...arg));
		return this;
	}

	*gene() {
		let v = this.v;
		for (const f of this.filters) {
			v = f(v);
		}
		console.log(`yealed*`);
		yield* v;
	}
}

const odd = function*(data) {
	for (const v of data){
		console.log(`odd`, v);
		if (v%2) yield v;
	} 

};
const take = function*(data, n) {
	for (const v of data){
		console.log(`take`, v);
		// if(n--) yield v; else break;
	} 
};
for(const v of Stream.get([1,2,3,4]).add(odd).add(take, 2).gene()) {
	console.log(v);
}

