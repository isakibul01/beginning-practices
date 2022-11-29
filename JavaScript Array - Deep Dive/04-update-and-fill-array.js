//Array fill - manual way
const array = new Array(10);
for(let i=0; i<array.length; i++){
    array[i] = false;
}
console.log(array);


//Array fill
const array2 = new Array(10);
array2.fill(0);
console.log(array2);

const names = ['Sakibul', 'Nayem', 'Sohan'];
names[0] = 'Sakib';
names[1] = 'Hasan';
names[2] = 'Al Amin';
console.log(names);




//Fill array & update
const response = new Array(10);
response.fill(false);

for(let i=0; i<response.length; i++){
    const rand = Math.floor(Math.random() * 10 +1);
    response[i] = rand > 5 ? 'x' : 'o';
}
console.log(response);




//Array is mutable
function update(arr){
    for(let i=0; i<arr.length; i++){
        arr[i] = `${i+1}. ${arr[i]}`;
    }
    return arr;
}

const updatedNames = update(names);
update(names);
console.log(names);
console.log(updatedNames);
console.log(names === updatedNames);