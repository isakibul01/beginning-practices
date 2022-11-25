//FlatMap -> Flat + Map

const array = [1, 2, 3, 4,];

const map = array.map((x) => [x * 2]);
console.log(map);

const flatMap = array.flatMap((x) => [x * 2]);
console.log(flatMap);

const flatMap1 = array.flatMap((x) =>[x, x * 2]);
console.log(flatMap1);


//FlatMap using Reduce
const reduceFlatMap = array.reduce((acc, cur) =>{
    return acc.concat(cur * 2);
}, []);
console.log(reduceFlatMap);

const reduceFlatMap1 = array.reduce((acc, cur) => {
    return acc.concat([cur, cur * 2]);
}, []);
console.log(reduceFlatMap1);