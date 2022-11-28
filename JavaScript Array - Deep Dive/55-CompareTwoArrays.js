const array1 = [1, 2, 3, 4];
const array2 = [1, 2, 3, 4];

if(JSON.stringify(array1) === JSON.stringify(array2)) {
    console.log('Equal');
} else {
    console.log('Not Equal');
}


/**
 * @param {Array1} array1
 * @param {Array1} array2 
 */


const compare = (array1, array2) => {
    if(array1.length !== array2.length){
        return false;
    }
    for(let i=0; i<array1.length; i++){
    if(array1[i] !== array2[i]) return false;
    }
    return true;
}
console.log(compare(array1, array2));



//Compare array in built-in method
console.log(array1 === array2); //It will return false.