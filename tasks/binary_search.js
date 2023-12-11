// 1287. Element Appearing More Than 25% In Sorted Array

function findSpecialInteger(arr) {
    const threshold = Math.floor(arr.length / 4);
    for (let i = 0; i < arr.length - threshold; i++) {
        if (arr[i] === arr[i + threshold]) {
            return arr[i];
        }
    }

    return null;
}

console.log(findSpecialInteger([1,2,2,2,2,6,6,7,10]));