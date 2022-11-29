let myArray = [14, 22, 13, 14, 25, 36, 47, 8, 1, 4, 5, 9, 10, 11, 12];


const bubbleSort = (array) => {
    for(let i=0; i<array.length; i++) {
        for(let j=0; j<array.length-1; j++) {
            if(array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
}
console.log('[Unsorted]', myArray);
bubbleSort(myArray);
console.log('[Sorted]', myArray);
