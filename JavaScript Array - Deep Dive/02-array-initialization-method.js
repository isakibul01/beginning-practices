//Constructor Pattern
const arr1 = new Array();
console.log(arr1, arr1.length);

//When we use literal we can't define the array length. In that case we need constructor pattern for declaring the array length manually.

const arr2 = new Array(5);
console.log(arr2, arr2.length);


const arr3 = new Array(1, 2, 3, 4, 5);
console.log(arr3, arr3.length);



//Factory Pattern
const array1 = Array();
console.log(array1, array1.length);

const array2 = Array(5);
console.log(array2, array2.length);


const array3 = Array(1, 2, 3, 4, 5);
console.log(array3, array3.length);


//Difference between constructor and factory - Only new keyword.