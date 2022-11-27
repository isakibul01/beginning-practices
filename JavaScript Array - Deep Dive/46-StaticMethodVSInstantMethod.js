/*
- What is Static Method?
- This methods are class method but accessible every where without creating instance.
*/

const arr = [];
//arr.concat(); - Instant Method
//Array.from(); - Static Method


//Example of JavaScript static method
// Array.from();
const str = Array.from('Sakibul Islam');
console.log(str);

const set = new Set(['Sakibul', 'Isalm', 'Sakibul']);
const str1 = Array.from(set);
console.log(str1);



const mapper = new Map([
    ['1', 'a'],
    ['2', 'b'],
]);

const mapKeys = Array.from(mapper.keys());
console.log(mapKeys);

const mapValue = Array.from(mapper.values());
console.log(mapValue);



function func() {
    return Array.from(arguments);
}
const func1 =func(1, 2, 3, 4);
console.log(func1);



/*
-Using an arrow functions as the map function to manipulate the elements. 
*/
Array.from([1, 2, 3], (x) => x + x); //[2, 4, 6]


/*
-Generate a sequence of numbers
-Since the array is initialized with 'undefined' on each position, the value of `v` below will be `undefined`
*/

Array.from({length: 5}, (v, i) => i*2);
//[0, 1, 2, 3, 4]


//Sequence generator function (commonly referred to as "range", e.g. Clojure, PHP etc)
const range = (start, stop, step) =>
Array.from(
    {length: (stop - start) / step + 1},
    (_, i) => start + i * step
);


//Generate numbers range 0..4
range(0, 4, 1); //[0, 1, 2, 3, 4]


//Generate numbers range 1..10 with step of 2
range(1, 10, 2); //[1, 3, 4, 7, 8]


//Generate the alphabet using Array.form making use of it being ordered as a sequence
range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map((x) =>
String.fromCharCode(x)
);


//Array.isArray()
//all following calls return true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array('a', 'b', 'c', 'd'));
Array.isArray(new Array(3));

//Little known fact: Array.prototype itself is an Array.
Array.isArray(Array.prototype);


//all following calls return false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray('Array');
Array.isArray(true);
Array.isArray(false);
Array.isArray(new Uint8Array(32));
Array.isArray({__proto__: Array.prototype});



//Array of()
Array.of(7) //[7]
Array.of(1, 2, 3) //[1, 2, 3]
Array.of(undefined) //[undefined]


Array(7) //[7 Empty Array]
Array(1, 2, 3) //[1, 2, 3]