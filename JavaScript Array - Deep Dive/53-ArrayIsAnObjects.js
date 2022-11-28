const array = [1, 2, 3];
console.log(typeof array); //Object
console.log(array.constructor); //Function
console.log(array.constructor.prototype); // []


array.test = 'Test Property';
array.log = function () {
    console.log(this);
    console.log(this.test);
    console.log(this.length);
    console.log(this[0]);
};
array.log();


const obj = {};
console.log(typeof obj);


//Checking array or not
console.log(array instanceof Array);
console.log(obj instanceof Array);
console.log(Array.isArray(array));
console.log(Object.prototype.toString.call(array) === '[object Array]');
console.log(Object.prototype.toString.call(array));