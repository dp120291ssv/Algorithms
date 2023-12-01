// O(n) - Linear Search

// O(n) - n is the number of elements in the array, the worst case is that the target is at the end of the array or not in the array at all.
// The best case is that the target is at the beginning of the array.

const randomArr = [1, 2, 5, 7, 9, 10, 12, 11, 3, 4, 6, 8];
let iterationCount = 0;

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        iterationCount += 1;
        if (arr[i] === target) {
            return i;
        }
    }
    return null;
}

console.log(linearSearch(randomArr, 4));
console.log('iterationCount', iterationCount);