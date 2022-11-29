let names = [
    'Md. Sakibul',
    'Md. Sohan',
    'Md. Bappi',
    'Md. Mojahid',
    'Md. Al Amin',
];


//We have reuse function
function reuse(arr, logic){
    for(let i=0; i<arr.length; i++){
        logic(arr[i], i, arr);
    }
}

//Example one
result1 = [];
reuse(names, (value) => {
    let r = value.length;
    result1.push(r)
});
console.log(result1);


//Example two
result2 = [];
reuse(names, (value) => {
    let r = value.toUpperCase();
    result2.push(r)
});
console.log(result2);



//Example Three
result3 = [];
reuse(names, (value) => {
    let r = value.substr(4);
    result3.push(r)
});
console.log(result3);



console.log('--------------------------------------');



function reuseAndMap(arr, logic){
    const result4 = [];
    for(let i=0; i<arr.length; i++){
        const res = logic(arr[i], i, arr);
        result4.push(res);
    }
    return result4;
}

const lengths = reuseAndMap(names, (value) => value.length);
const uppers = reuseAndMap(names, (value) => value.toUpperCase());
const sliced = reuseAndMap(names, (value) => value.substr(4));

console.log(lengths);
console.log(uppers);
console.log(sliced);



console.log('--------------------------------------');



//Official map method
const length1 = names.map((value) => value.length);
const uppers1 = names.map((value) => value.toUpperCase());
const sliced1 = names.map((value) => value.substr(4));

console.log(length1);
console.log(uppers1);
console.log(sliced1);



console.log('--------------------------------------');



//Real life example
const studentArray = [
    {id: 1, name: 'Sakibul Islam', Gpa: 3.20, email: 'sakibul@gmail.com'},
    {id: 2, name: 'Abd kaium', Gpa: 3.42, email: 'kaium@gmail.com'},
    {id: 3, name: 'Naharul Islam Apon', Gpa: 3.12, email: 'apon@gmail.com'},
    {id: 4, name: 'Riaz Uddin', Gpa: 3.34, email: 'riaz@gmail.com'},
    {id: 5, name: 'Nahid Hasan', Gpa: 3.96, email: 'nahid@gmail.com'},
];

const mappedStudents = studentArray.map((value) => {
    return {
        ...value,
        title: `Hello ${value.name} - Your result has been published.`,
        msg: `Hello ${value.name}, You have got ${value.Gpa}. You have ${value.Gpa >= 3 ? 'passed!' : 'failed!'}`,
    }
});

console.log(mappedStudents);