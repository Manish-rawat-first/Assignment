function sortArrayDescending(arr) {
    const sortedArray = arr.sort((a, b) => b - a);
    return sortedArray;
}

const inputArray = [5, 1, 4, 2, 3];
const sortedArray = sortArrayDescending(inputArray);
console.log(sortedArray);
