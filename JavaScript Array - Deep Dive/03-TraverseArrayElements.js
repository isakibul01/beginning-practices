//Traverse - Touch every element of the array.

const array = [1, 2, 3, 4, 5];

const num = array[3];
const x = 1, y = 0;

console.log(num, array[x], array[y], array[x+y]);

//Simple traverse
for(let i=0; i<array.length; i++){
    console.log(array[i]);
}


//Array sum & avg
let sum = 0;
for(let i=0; i<array.length; i++){
    sum += array[i];
}
console.log(sum);
console.log(sum / array.length);


//Find large number
let largestNumber = array[0];
for(let i=1; i<array.length; i++){
    if (array[i] > largestNumber){
        largestNumber = array[i];
    }
}
console.log(largestNumber);