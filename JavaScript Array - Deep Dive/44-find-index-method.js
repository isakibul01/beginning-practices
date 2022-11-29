const array = [1, 3, 4, 55, 745, 345, 23, 5, 7, 90, 54];


let todo = [
    {name: 'Project 1', isDone: true},
    {name: 'Project 2', isDone: true},
    {name: 'Project 3', isDone: true},
    {name: 'Project 4', isDone: false},
    {name: 'Project 5', isDone: false},
    {name: 'Project 6', isDone: false},
    {name: 'Project 7', isDone: true},
];


const index1 = array.findIndex((item) => item ===54);
console.log(index1);

const index2 = todo.findIndex((item) => item.name === 'Project 3');
console.log(index2);

const index3 = todo.findIndex((item) => item.isDone === false);
console.log(index3);