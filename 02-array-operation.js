/*===============Array Traverse:===============*/

/*
Traverse in programming - Imperative & Declarative.

/*========Imperative way:========*/
/*
Imperative traverse - Traverse with loop:
We touch every element of the array by run loop. Which is called traverse.
*/

const numbers = [2, 4, 6, 7, 8];

//   let  sum = 0;
// for(let i=0; i<numbers.length; i++){
//      sum += numbers[i];
//  }

// console.log(sum);

/*
We instruct everything in the program. Which is a imperative way. But JavaScript is a high level language. So, we will do everything in JavaScript in declarative way.




/*========Declarative way:========*/
/*
Method-Foreach: It will the run the loop. But it don't know what is in inside the loop body.

numbers.forEach(call back function);
Call back function: When we pass another function as argument in a function.

****Normal function expression VS fat arrow function.
*/

const cb = () => {
    //  console.log('Hello');
 }
numbers.forEach(cb);

/*
In forEach method we don't need to call the function. forEach will call the function by itself.

Argument: Position Argument & Named Argument.
*/

numbers.forEach(function (value) {
    if(value % 2 == 0){
    //   console.log(value);
    }
});

let sum = 0;
numbers.forEach(function (v, i){
        if(i <= 3){
            sum += v;
        }
});
// console.log(sum);

/*
forEach is a void function - It will return nothing.
Which we do by run a loop we can do it easily by using forEach. firEach will do that what we want to do by writing for loop. So, it is more productive.
*/


/*Separate the all the number from the array in Imperative way.*/

const arr = [1, 3, 5, 8 , 10, '', 6, 4, 22, 56, null, false, 'test'];

let count = 0;
for(let i=0; i<arr.length; i++){
    for(let j=i; j<arr.length-1; j++){
        if(typeof arr[j] !== 'number'){
            arr[j] = arr[j+1]
            arr[j+1] = undefined; 
        }        
    }
    if(arr[i] === undefined){
        count++;
    }
}
arr.length -= count;
// console.log(arr);


const new_Array = [];
for(let i=0; i<arr.length; i++){
    if(typeof arr[i] === 'number'){
        new_Array.push(arr[i]);
    }
}
// console.log(new_Array);

/*
The following method is also efficient. But it will take extra memory for declaring new array.
*/


/*
Separate the all the number from the array in Declarative way.
*/

const filteredArray = arr.filter((v) => typeof v === 'number');
// console.log(filteredArray);

//Determine fibonacci number:
function fib(n) {
    if(n == 0 || n == 1){
        return n;
    }
    return fib(n-1) + fib(n-2);
}

// console.log(fib(55));



/*========Array Update========*/

const arr0 = [1, 2, 3, 4, 5, 6,];
// array[2] = 300; /*When we know the index*/


const array = [
    {id: 1, value: 10},
    {id: 2, value: 20},
    {id: 3, value: 30},
    {id: 4, value: 40},
    {id: 5, value: 50},
];

const obj2 = array[2];
obj2.value = 300;

const index0 = array.findIndex(function (v) {
    return v.id === 4;
});
array[index0].value = '400'; //Change array element by find array index.
// console.log(array);


const obj = array.find(function (v) {
    return v.id === 4;
});
obj.value = 400;
// console.log(obj);
// console.log(array);
// console.log(array[3] === obj);


const a = {},
b = {}
const c = a;
// console.log(a === b); //Two object can't be same.
// console.log(a === c);



/*========Array Delete-Declarative Way========*/

// Splice -> mutable: It will affect the original array. It will mutate the original array.

const array2 = [
    {id: 1, value: 10},
    {id: 2, value: 20},
    {id: 3, value: 30},
    {id: 4, value: 40},
    {id: 5, value: 50},
];

const index = array2.findIndex((item) => item.id === 4);
const newArr =array2.splice(index, 2);
// console.log(array2);


// Filter -> immutable: When we don't want to mutate the original array.

const array3 = [
    {id: 1, value: 10},
    {id: 2, value: 20},
    {id: 3, value: 30},
    {id: 4, value: 40},
    {id: 5, value: 50},
];

const newArray = array3.filter((item) => item.id !== 4);
// console.log(array3);
// console.log(newArray);




/*=============JavaScript Object=============*/

//Object Literal
const microphone = {
    brand: 'Fifine',
    indicator: true,
    price: 8000,
    color: 'Black',
    startRecording() {
        console.log('recording started.');
    },
    stopRecording() {
        console.log('recording stopped.');
    }
}

Object.freeze(microphone);

microphone.newProperty = 'My new property.';

// console.log(microphone);

/*
When a function scoped inside an object then we will call it method.

Difference between method & function:

*We can call a function anywhere. But we can't call a method. For call a function inside an object we need to mention the object name.

Example: microphone.startRecording();
*/


/*
*There are two difference parts in object.

No 1: Noun / Adjective / (State/Data/Property/Field)

No 2: Verb / (functionalities -> start, stop)
*/


//Constructor Function
const testObject = new Object();
testObject.name = 'testObject';
testObject.time = new Date();
// console.log(testObject);


//Some object method

// console.log(Object.keys(microphone)); //Return keys
// console.log(Object.values(microphone)); //Return values
// console.log(Object.entries(microphone)); //For create two dimensional array.

const microphone2 = [
    ['brand', 'Walton'],
    ['indicator', true],
    ['price', 8000],
    ['color', 'Black'],
];
// console.log(Object.fromEntries(microphone2));



/*=============Notation=============*/

microphone.brand //Dot notation
microphone['brand'] //Array notation

//Detect empty object
const empty = {};
// console.log(Object.keys(empty).length === 0);