// Function to find duplicate elements in an array
function findDuplicates(arr) {
    // Create a Set to track unique elements
    const seen = new Set();
    // Create an array to store duplicates
    const duplicates = [];
  
    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
      if (seen.has(arr[i])) {
        // If the element is already in the Set, it's a duplicate, so add it to the duplicates array
        duplicates.push(arr[i]);
      } else {
        // If the element is not in the Set, add it to the Set
        seen.add(arr[i]);
      }
    }
  
    return duplicates;
  }
  
  // Example usage:
  const array = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 2];
  
  console.log("Original Array:", array);
  
  const duplicates = findDuplicates(array);
  console.log("Duplicate Elements:", duplicates);
  
  // Test with strings
  const stringArray = ["apple", "banana", "apple", "orange", "banana", "cherry"];
  const duplicateStrings = findDuplicates(stringArray);
  console.log("Duplicate Strings:", duplicateStrings);
  