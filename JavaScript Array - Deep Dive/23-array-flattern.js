let nestedArray = [[1, 2], 3, 4, [5, 6]];
//Flat Array = [1, 2, 3, 4, 5, 6]


//Array flat method
const flatArray = nestedArray.flat();
console.log(flatArray);


//We can do the same thing using Reduce method
const flatArray2 = nestedArray.reduce((acc, cur) => {
    return acc.concat(cur);
}, []);
console.log(flatArray2);