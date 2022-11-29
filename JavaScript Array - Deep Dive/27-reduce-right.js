//Reduce Right
const array = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
];

const result = array.reduceRight((acc, cur) =>{
    return acc.concat(cur);
}, []);
console.log(result);



//Explain Reduce Right
const numbers = [1, 2, 3, 4];
const sum = numbers.reduceRight((acc, cur) =>{
    console.log(`Acc [${acc}] - [${cur}]`);
    return acc + cur;
}, 0);
console.log(`Sum = [${sum}]`);