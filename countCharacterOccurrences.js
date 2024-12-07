// Function to count occurrences of each character in a string
function countCharacterOccurrences(str) {
    // Create an empty object to store character counts
    const charCount = {};
  
    // Loop through each character in the string
    for (let char of str) {
      // If the character is already in the object, increment its count, otherwise set it to 1
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    // Return the object containing the character counts
    return charCount;
  }
  
  // Example usage:
  const inputString = "hello world";
  
  console.log("Input String:", inputString);
  
  const characterCounts = countCharacterOccurrences(inputString);
  console.log("Character Occurrences:", characterCounts);
  
  // Test with an empty string
  const emptyString = "";
  const emptyCount = countCharacterOccurrences(emptyString);
  console.log("Character Occurrences in Empty String:", emptyCount);
  
  // Test with a string containing special characters
  const specialString = "aabbcc!!@@";
  const specialCount = countCharacterOccurrences(specialString);
  console.log("Character Occurrences in Special String:", specialCount);
  