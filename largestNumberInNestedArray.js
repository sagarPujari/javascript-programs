
// Example 1
// function findLargestElement(arr) {
//     let max = -Infinity;
//     function helper(nestedArr) {
//         for (let item of nestedArr) {
//             if (typeof item === "number") {
//                 max = Math.max(max, item);
//             } else if (Array.isArray(item)) {
//                 helper(item);
//             }
//         }
//     }
//     helper(arr);
//     return max;
// }
// const nestedArray = [1, [2, 3, [4, 5]], 6, [7, 8]];
// const largestElement = findLargestElement(nestedArray);
// console.log("Largest element:", largestElement);

//Example 2
function findLargestElement(nestedArray) {
    // Initialize the largest element as the first element of the first sub-array
    let largest = nestedArray[0][0];
  
    // Iterate over each sub-array in the 2D array
    for (let arr of nestedArray) {
      // Iterate over each number in the current sub-array
      for (let num of arr) {
        // If the current number is larger than the current largest, update largest
        if (num > largest) {
          largest = num;
        }
      }
    }
  
    // Return the largest element found
    return largest;
  }
  
  // Example usage:
  const nestedArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const largestElement = findLargestElement(nestedArray);
  
  console.log("The largest element is:", largestElement);
  