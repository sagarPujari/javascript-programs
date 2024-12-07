function isPalindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/gi, ''); //not mandatory
    
    // Check if the cleaned string is equal to its reverse
    return cleanedStr === cleanedStr.split('').reverse().join('');
  }
  
  // Example usage:
  const testStrings = [
    "madam",           // Palindrome
    "racecar",         // Palindrome
    "hello",           // Not a palindrome
    "A man, a plan, a canal, Panama", // Palindrome with spaces and punctuation
    "Was it a car or a cat I saw?"    // Palindrome with spaces and punctuation
  ];
  
  testStrings.forEach(str => {
    console.log(`Is "${str}" a palindrome?`, isPalindrome(str));
  });

//   const inputString = "A man, a plan, a canal, Panama"; // Example palindrome string
// const result = isPalindrome(inputString);

// console.log(`Is "${inputString}" a palindrome?`, result);
  