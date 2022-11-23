const array = [1, 2, 3, 4, 5, 6];

//Slice
const slicedArray = array.slice(1, 3);
console.log(slicedArray);

//Clone array
const clonedArray = array.slice();
console.log(array === clonedArray); //Comparing real & cloned array.

//Array like object - Array conversion
function toArray() {
    return Array.prototype.slice.call(arguments);
}
const argArray = toArray(4, 2, 5, 6, 'Sakibul');
console.log(argArray);
