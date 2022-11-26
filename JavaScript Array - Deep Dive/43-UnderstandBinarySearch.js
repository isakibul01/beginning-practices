let array = [12, 3, 1, 32, 65, 78, 98, 90, 100];

const binarySearch = ((arr, key) => {
    let lowest = 0;
    let highest = arr.length - 1;

    while (lowest <= highest) {
        let mid = Math.floor((lowest + highest) / 2);
        if(arr[mid] === key) return mid;
        if(arr[mid] < key) lowest = mid + 1;
        if(arr[mid] > key) highest = mid -1;
    }
    return -1;
});

array.sort((a, b) => a - b);
console.log(array);
const index = binarySearch(array, 100);
console.log(index);