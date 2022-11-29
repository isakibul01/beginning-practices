const arr = [14, 22, 40, 50, 13, 14, 25, 36, 47, 8, 1, 4, 5, 9, 10, 11, 12];

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

const linearSearch = ((arr, key) => {
    for(let i=0; i<arr.length; i++){
        if(arr[i] === key){
            return i;
        }
    }
    return -1;
});

const s1 = linearSearch(arr, 22);
console.log(s1);


const s2 = linearSearch(students, 'Talha');
console.log(s2);
//It can't find the name



console.log('------------------------------------');


//Linear Search logic
const linearSearchCb = ((arr, cb) => {
    for(let i=0; i<arr.length; i++){
        if(cb(arr[i])){
            return i;
        }
    }
    return -1;
});


//Search by Name
const s3 = linearSearchCb(students, (item) => item.name === 'Sohan');
console.log(s3);


//Search by Id
const s4 = linearSearchCb(students, (item) => item.id === 4);
console.log(s4);

