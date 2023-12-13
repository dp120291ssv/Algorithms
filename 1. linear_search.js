// complexity O(n)

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