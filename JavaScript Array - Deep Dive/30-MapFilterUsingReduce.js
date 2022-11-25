const numbers = [1, 2, 3, 4, 5];


//Mapped
const squares = numbers.reduce((acc, cur) => {
    acc.push(cur * cur);
    return acc;
}, []);
console.log(squares);



//Filter
const odds = numbers.reduce((acc, cur) => {
    if(cur % 2 === 1){
        acc.push(cur);
    }
    return acc;
}, []);
console.log(odds);



//Big Array
const bigArray = [];

for(let i=0; i<500000000000; i++){
    bigArray.push(i);
}



//Map and Filter chain - Time efficiency
console.time('Both');
bigArray.filter((v) => v % 2 === 0).map((v) => v * 2);
console.timeEnd('Both');



//Map and Filter Reduce - Time Efficiency
console.time('Reduce')
bigArray.reduce((acc, cur) => {
    if (cur % 2 === 0){
        acc.push(cur * 2);
    }
    return acc;
}, []);
console.timeEnd('Reduce');



/*
We use Map & Filter generally. But when we need to use Map & Filter both we will use Reduce.
*/
