//Push - Add element in the end
const array = [1, 2, 3, 4, 5];
const array1 = [10, 11, 12];

//Generally don't use
array[array.length] = 6;

array.push(7, 8);

//Concat two array
array.push(...array1);

//Concat - Old method
// Array.prototype.push.apply(array, array1);

console.log(array);



//Unshift - Add element in the beginning
const array2 = [5, 6, 7];
const array3 = [8, 4, 2];

array2.unshift(4);

//Concat two array
array2.unshift(...array3);

//Concat - Old method
// Array.prototype.unshift.apply(array2, array3);

console.log(array2);



//Splice - Add element to the given index
const array4 = [1, 2, 3, 5, 6];
array4.splice(3, 0, 4);

//Splice another array
const array5 = [7, 8, 9, 10, 11];
array4.splice(6, 0, ...array5);

console.log(array4);