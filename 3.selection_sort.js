//complexity = O(n^2)

const randomArr = [1, 2, 5, 7, 9, 10, 12, 11, 3, 4, 6, 8, -1, 1, 14, 2, 13];
let iterationCount = 0;

function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let minIndex = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
            iterationCount += 1;
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

console.log("selectionSort result: ", selectionSort(randomArr));
console.log("iterationCount: ", iterationCount);