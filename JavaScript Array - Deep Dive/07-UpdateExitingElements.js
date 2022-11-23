//Easy one
const numbers = [1, 2, 7, 4, 5];
numbers[2] = 3;
console.log(numbers);


//Array of object
const students = [
    {id: 1, name: 'Sakibul'},
    {id: 2, name: 'Sohan'},
    {id: 3, name: 'Al Amin'},
    {id: 4, name: 'Nahid'},
];

const givenID = 3;
const updatedNames = 'Tonmoy';

for(let i=0; i<students.length; i++){
    if(givenID === students[i].id){
        students[i].name = updatedNames;
        break;
    }
}
console.log(students);