function findMax(arr) {

    return Math.max(...arr);//Math.max(...arr) is used to find the maximum number in the array arr. The spread operator (...) expands the array into individual arguments so that Math.max can compare them.
    //return arr.reduce((max, current) => (current > max ? current : max), -Infinity);  //We start with -Infinity because it ensures that any number in the array will be larger than this initial value, so the first number checked will immediately become the "max".

    // if (arr.length === 0) {
    //     return null; // Handle empty array
    // }
    // let max = arr[0];
    // for (let i = 1; i < arr.length; i++) {
    //     if (arr[i] > max) {
    //         max = arr[i];
    //     }
    // }
    return max;
}
const numbers = [10, 5, 10, 8, 85];
const maxNumber = findMax(numbers);
console.log("The maximum number is:", maxNumber);
