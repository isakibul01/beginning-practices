const array = [1, 2, 3, 4];
const array2 = array;
array2.push(5);
console.log('Array2', array === array2);
console.log(array, array2);


//Coping using ES6 Spread Operator [Shallow Copy]
const array3 = [...array];
array3.push(6);
console.log(array, array3);


//Shallow Copy vs Deep Copy
const points = [
    [10, 12],
    [2, 55],
    [67, 31],
];

const pointsCopy = [...points];
pointsCopy.push([1, 2]);
pointsCopy[0][0] = 100;
pointsCopy[0][1] = 120;
console.log(points);
console.log(pointsCopy);




//[].map [Shallow Copy]
const array4 = array.map((x) => x);
console.log(array === array4);


//[].filter [Shallow Copy]
const array5 = array.filter(() => true);
console.log(array === array5);


//[].slice [Shallow Copy]
const array6 = array.slice();
console.log(array === array6);


//[].concat [Shallow Copy]
const array7 = array.concat();
console.log(array === array7);


//Array.form() [Shallow Copy]
const array8 = Array.from(array);
console.log(array === array8);



//JSON.stringify ans JSON.parse [Deep Copy]
const pointsDeepCopy = JSON.parse(JSON.stringify(points));
pointsDeepCopy[0][0] = 100;
pointsDeepCopy[0][1] = 120;
console.log(points);
console.log(pointsDeepCopy);