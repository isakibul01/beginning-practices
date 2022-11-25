const votes = [
    'Java',
    'Java',
    'Python',
    'Java',
    'JavaScript',
    'Python',
    'JavaScript'
];

const result = votes.reduce((acc, cur) =>{
    if(acc[cur]){
        acc[cur]++
    } else {
        acc[cur] = 1;
    }
    return acc;
}, {});
console.log(result);

//Output: {Java: 3, Python: 2, JavaScript: 2}