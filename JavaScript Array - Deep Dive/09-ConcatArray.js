const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

//Way 1
const array3 = array1.concat(array2);
console.log(array3);

//Way 2 - Spread operator
const array4 = [...array1, ...array2];
console.log(array4);

//Way 3
const array5 = [].concat(array1, array2, 7, 8);
console.log(array5);