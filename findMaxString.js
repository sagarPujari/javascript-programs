function findMaxString(arr) {
    return arr.reduce((max, current) => (current > max ? current : max), ""); //The findMaxString function uses reduce() to iterate through the array and keep track of the largest string (based on lexicographical order).
                                                                              //The initial value for the reduce method is "" (an empty string), ensuring it works with non-empty arrays.
  }
  
  // Example usage:
  const stringArray = ["apple", "orange", "banana", "grape", "kiwi"];
  const maxString = findMaxString(stringArray);
  
  console.log("The lexicographically largest string is:", maxString);
  