const randomArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let iterationCount = 0;

function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length;
    let middle;
    let isFound = false;
    let position;
    while (isFound === false && start <= end) {
        middle = Math.floor((start + end) / 2);
        iterationCount += 1;
        if (arr[middle] === target) {
            isFound = true;
            position = middle;
            return position;
        }
        if (target < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
}