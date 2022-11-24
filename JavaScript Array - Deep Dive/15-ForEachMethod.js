let names = [
    'Sakibul',
    'Sohan',
    'Al Amin',
    'Sadhin',
];


//How we do it on For loop 
for(let i=0; i<names.length; i++){
    console.log(names);
}
for(let i=0; i<names.length; i++){
    console.log(`${i+1}. ${names[i]}`);
}


// Iterating Logic - Business Logic

// Mechanism inside forEach method.
function reuse(arr, logic) {
    for(let i=0; i<arr.length; i++){
        console.log(arr[i], i, arr);
    }
}

function log(value){
    console.log(value);
}

function logic(value, index, arr){
    console.log(value, index, arr);
}

reuse([]);
reuse([1, 2], log);
reuse(['One', 'Two', 'Three'], logic);





console.log('--------------------------------------');




function myForeach(arr, cb){
    for(let i=0; i<arr.length; i++){
        cb(arr[i], i, arr);
    }
}

const numbers = [1, 2, 3, 4];
let sum = 0;

myForeach(numbers, function (v) {
    sum +=v;
});

console.log(sum);


myForeach(names, (value, index) =>{
    console.log(`${index +1}: ${value}`);
});



console.log('--------------------------------------');



//Official forEach
names.forEach((value, index) => {
    console.log(`${index+1}: ${value}`);
});

/*
Necessity of forEach: It will prevent looping again and again.
*/