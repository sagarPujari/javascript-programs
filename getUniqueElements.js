// Function to get unique elements from an array
function getUniqueElements(arr) {
    // Using Set to remove duplicates, and Array.from to convert it back to an array
    return Array.from(new Set(arr));
  }
  
  // Example usage:
  const inputArray = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 1];
  console.log("Original Array:", inputArray);
  
  const uniqueArray = getUniqueElements(inputArray);
  console.log("Unique Elements:", uniqueArray);
  
  // Test with strings
  const stringArray = ["apple", "banana", "apple", "orange", "banana"];
  const uniqueStrings = getUniqueElements(stringArray);
  console.log("Unique Strings:", uniqueStrings);
  