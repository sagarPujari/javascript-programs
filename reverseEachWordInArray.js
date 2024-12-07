function reverseEachWord(str) {
    const words = str.split(" "); // Split the string into words
    const reversedWords = words.map(word => {
      return word.split("").reverse().join(""); // Reverse each word
    });
    return reversedWords.join(" "); // Join the words back into a string
  }
  
  const inputString = "hello world this is a sample string";
  const reversedString = reverseEachWord(inputString);
  console.log("Reversed string:", reversedString);
  