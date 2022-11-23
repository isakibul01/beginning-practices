let numbers =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

//Remove first element
numbers.shift();


//Remove last element
numbers.pop();
numbers.length = numbers.length - 1;


//Remove inside element - Splice using index
numbers.splice(2, 2);


//Remove inside element - Splice using value
const toBeDeleted = 8;
for(let i=0; i<numbers.length; i++){
    if(toBeDeleted === numbers[i]){
        numbers.splice(i, 1);
    }
}


//Filter array
const toBeDeleted1 = 6;
numbers = numbers.filter((item) => item !== toBeDeleted1);


//Delete operator
// numbers[1] = undefined;
delete numbers[10];

console.log(numbers);


//Reset whole array
let x = [1, 2, 3];
let y = x;
x = [];
console.log(x, y); //Reference array is not empty here.

//Reset whole array - Alternative
let xx = [1, 2, 3];
let yy = xx;
xx.length = 0;

console.log(xx, yy);


//Reset array using While loop
const num = [1, 2, 3, 4, 5, 6, 7, 8];

while(num.length) num.pop();

console.log(num);