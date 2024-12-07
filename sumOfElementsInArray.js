// Function to find the sum of elements in an array
function findSum(arr) {
    // Use the reduce() method to accumulate the sum of elements in the array
    return arr.reduce((sum, num) => sum + num, 0); // Initial sum is 0
  }
  
  // Example usage:
  const array = [1, 2, 3, 4, 5];
  
  console.log("Original Array:", array);
  
  const sum = findSum(array);
  console.log("Sum of Array Elements:", sum);
  
  // Test with an array of negative numbers
  const negativeArray = [-1, -2, -3, -4, -5];
  const negativeSum = findSum(negativeArray);
  console.log("Sum of Negative Array Elements:", negativeSum);
  
  // Test with an array of mixed numbers
  const mixedArray = [1, -2, 3, -4, 5];
  const mixedSum = findSum(mixedArray);
  console.log("Sum of Mixed Array Elements:", mixedSum);
  