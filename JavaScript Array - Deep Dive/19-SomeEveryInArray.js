/*
Some: We will use Some when we want to return a condition true by check condition(At least a single condition is true.)

Every: Every condition needs to be true.
*/


//Some Method
const runInASingleMatch = [
    {name: 'Ricky Ponting', runs: 340},
    {name: 'Bayern Lara', runs: 400},
    {name: 'Chris Gyle', runs: 333},
    {name: 'Kumar Sangakara', runs: 290},
];
const atLeastOne = runInASingleMatch.some((value) => value.runs >= 400);
console.log(atLeastOne);





console.log('--------------------------------------');




//Every Method
const productReview = [
    {name: 'Sakibul Islam', response: 'Positive', ratings: '5'},
    {name: 'Ajmir Sohan', response: 'Positive', ratings: '4'},
    {name: 'Al Amin', response: 'Positive', ratings: '3.5'},
    {name: 'Mojahid Islam', response: 'Positive', ratings: '4'},
];

const positiveReview = productReview.every((value) => value.ratings > 3);
if(positiveReview) {
    console.log('100% Positive Review!');
} else {
    console.log('Some customer are not satisfied.');
}