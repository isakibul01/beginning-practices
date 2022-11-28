function makeRangeIterator(start = 0, end = Infinity, step = 1){
    let nexIndex = start;
    let iterationCount = 0;

    const rangeIterator = {
        next: function() {
            let result;
            if(nexIndex < end){
                result = { value: nexIndex, done: false};
                nexIndex +=step;
                iterationCount++;
                return result;
            }
            return { value: iterationCount, done: true};
        },
    };
    return rangeIterator;
}


const it = makeRangeIterator(1, 10, 2);
console.log(it.next());


let result = it.next();

while(!result.done){
    console.log(result.value);
    result = it.next();
}


console.log('Iteration Over', result.value);