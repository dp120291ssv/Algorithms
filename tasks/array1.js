// 1287. Element Appearing More Than 25% In Sorted Array
// Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.
// O(n)


// binary search
function findSpecialIntegerBinary(arr) {
    const len = arr.length;
    const quarter = Math.floor(len / 4);
    for (let i = 0; i < len - quarter; i++) {
        if (arr[i] === arr[i + quarter]) {
            return arr[i];
        }
    }

    return null;
}

console.log(findSpecialIntegerBinary([1,2,2,2,2,6,6,7,10]));

function findSpecialIntegerLinear(arr) {
    const len = arr.length;
    const quarter = Math.floor(len / 4);
    for (let i = 0; i < len; i++) {
        if (arr[i] === arr[i + quarter]) {
            return arr[i];
        }
    }

    return null;
}