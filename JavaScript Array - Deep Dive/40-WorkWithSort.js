let numbers = [10 ,20, 30, 40, 50, 60, 70, 80, 90, 100];

//Will not work perfectly
numbers.sort();
console.log(numbers);


//We have to define the call back with the condition.
//Suppose we want to sort the numbers in ascending order.
const numbers1 = [14, 22, 40, 50, 13, 14, 25, 36, 47, 8, 1, 4, 5, 9, 10, 11, 12];
numbers1.sort((a, b) => {
    return a - b;
});
console.log(numbers1);


//Sort strings
let strings = ['Apple', 'Cat', 'Ball', 'apple'];
strings.sort((a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a > b) return 1;
    if (b > a) return -1;
    return 0;
});
console.log(strings);



//We can sort objects in an array by any common property value of the objects.

//Suppose we have an Array with objects data of a class. Now we want to sort the array depending on the roll number in ascending order.

const students = [
    {id: 2, name: 'Sakibul'},
    {id: 1, name: 'Sohan'},
    {id: 3, name: 'Mojahid'},
    {id: 4, name: 'Al Amin'},
    {id: 6, name: 'Bappi'},
    {id: 5, name: 'Rahul'},
    {id: 7, name: 'Talha'},
    {id: 8, name: 'Kaium'},
    {id: 10, name: 'Hojaifa'},
    {id: 9, name: 'Faruk'},
];

//Sort by Id
students.sort((a, b) => {
    if(a.id > b.id) return 1;
    if(a.id < b.id) return -1;    
    return 0;
});
console.log(students);

//Sort by Name
students.sort((a, b) => {
    if(a.name > b.name) return 1;
    if(a.name < b.name) return -1;
    return 0;
});
console.log(students);