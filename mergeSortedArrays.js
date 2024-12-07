function mergeSortedArrays(arr1, arr2) {
    // Merge both arrays and sort the resulting array in ascending order
    return [...arr1, ...arr2].sort((a, b) => a - b);
  }
  
  // Example usage:
  const arr1 = [1, 3, 5, 7];
  const arr2 = [2, 4, 6, 8];
  
  const mergedArray = mergeSortedArrays(arr1, arr2);
  
  console.log("Array 1:", arr1);
  console.log("Array 2:", arr2);
  console.log("Merged and sorted array:", mergedArray);
  