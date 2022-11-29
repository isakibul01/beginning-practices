const array = ['a', 'b', 'c', 'd'];

const isArr = array[Symbol.iterator]();


console.log(isArr.next());
console.log(isArr.next());
console.log(isArr.next());
console.log(isArr.next());
console.log(isArr.next());