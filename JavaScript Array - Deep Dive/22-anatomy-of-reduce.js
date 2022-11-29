/*
Accumulate: gather or together or acquire an increasing number or quantity of.
*Final value is the accumulator in Reduce function. If we don't define the initial value of the accumulator.
*/

let numbers = [1, 2, 3, 4, 5];

//Implementing Sum
function sumFunc(accumulator, currentValue, index){
    console.log(`Index ${index} - Acc ${accumulator}`);
    return accumulator + currentValue;
}
const sum = numbers.reduce(sumFunc);
console.log(sum);