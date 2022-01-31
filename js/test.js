const obj = {
	a: 10,
	b: 1
};


const copy = obj;

copy.a = 15;

console.log(copy);
console.log(obj);