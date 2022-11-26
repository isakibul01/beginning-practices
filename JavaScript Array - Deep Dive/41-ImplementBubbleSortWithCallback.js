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

const bubbleSort = (array, cb) => {
    for(let i=0; i<array.length; i++) {
        for(let j=0; j<array.length-1; j++) {
            if(cb(array[j], array[j+1]) > 0) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
};

const arr = [14, 22, 40, 50, 13, 14, 25, 36, 47, 8, 1, 4, 5, 9, 10, 11, 12];
bubbleSort(arr, (a, b) => a - b);
console.log(arr);


bubbleSort(students, (a, b) => a.id - b.id);
console.log(students);


bubbleSort(students, (a, b) => {
    if(a.name > b.name) return 1;
    if(a.name > b.name) return -1;
    return 0;
});
console.log(students);