const array = ['a', 'b', 'c'];
const keys = array.keys(); //0, 1, 2 Iterator
const values = array.values(); //'a', 'b', 'c' Iterator
const entries = array.entries(); // [0, 'a'], [1, 'b'], [, 'c'] Iterator


const loop = (it, name) => {
    for(let v of it){
        console.log(`[${name}] - ${v}`);
    }
};


console.log(keys, 'KEY');
console.log(values, 'VALUE');
console.log(entries, 'ENTRY');


const arr = [3, 5, 7, 9];
for(let v of arr){
    console.log(v);
}

loop(arr, 'ARRAY');