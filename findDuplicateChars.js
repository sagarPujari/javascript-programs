// Function to count occurrences of each character in a string
function countCharacterOccurrences(str) {
    const charCount = {};
  
    // Loop through each character in the string
    for (let char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    return charCount;
  }
  
  // Function to find duplicate characters in a string
  function findDuplicateChars(str) {
    const charCount = countCharacterOccurrences(str);
    
    // Filter characters that appear more than once
    const duplicates = [];
    
    for (let char in charCount) {
      if (charCount[char] > 1) {
        duplicates.push(char);
      }
    }
    
    return duplicates;
  }
  
  // Example usage:
  const inputString = "hello world";
  console.log("Input String:", inputString);
  
  // Find and print duplicate characters
  const duplicateChars = findDuplicateChars(inputString);
  console.log("Duplicate Characters:", duplicateChars);
  
  // Test with an empty string
  const emptyString = "";
  const emptyDupes = findDuplicateChars(emptyString);
  console.log("Duplicate Characters in Empty String:", emptyDupes);
  
  // Test with a string containing special characters
  const specialString = "aabbcc!!@@";
  const specialDupes = findDuplicateChars(specialString);
  console.log("Duplicate Characters in Special String:", specialDupes);
  