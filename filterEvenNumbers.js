function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);  // Filters out even numbers
  }
  
  // Example usage:
  const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  // Example array with both odd and even numbers
  const evenNumbers = filterEvenNumbers(numbersArray);
  
  console.log("Original array:", numbersArray);
  console.log("Even numbers:", evenNumbers);
  