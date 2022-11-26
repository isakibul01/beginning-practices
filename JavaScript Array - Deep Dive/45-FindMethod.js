/*
The find() method returns the value of the first element in the provided array that satisfied the provided testing function.

Suppose we have a array of todo. now we want to know which task is to done at the particular time of the day.
*/

let todo = [
    {id: '123', task: 'Eat', time: 'Morning'},
    {id: '224', task: 'Code!', time: 'Afternoon'},
    {id: '532', task: 'COffee Break', time: 'Evening'},
    {id: '121', task: 'Sleep', time: 'Night'},
];

const todo1 = todo.find((item) => item.time === 'Afternoon');
todo.task = 'Debugging!!';
console.log(todo1);



/*
Let's assume that there is an array of results of the students in a class with their name. We just know the Highest number that has been obtained by a student. We need to find who got the highest number.
*/

const result = [
    {name: 'Sakibul', score: 84},
    {name: 'Sohan', score: 82},
    {name: 'Faruk', score: 54},
    {name: 'Yousuf', score: 65},
];

const highest = 84;
const students = result.find((item) => item.score === highest);
console.log(students);


//Our own way
const ourFind = ((arr, cb) => {
    for(let i=0; i<arr.length; i++){
        if(cb(arr[i])){
            return arr[i];
        }
    }
    return undefined;
});

const lowest = 54;
const student2 = ourFind(result, (item) => item.score === lowest);
console.log(student2);