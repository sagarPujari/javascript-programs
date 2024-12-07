var string = "welcome to the javascript guide!";  
var reversedWords = string.split(' ') // Split the string into an array of words  
                           .map(word => word.split('').reverse().join('')) // Reverse each word  
                           .join(' '); // Join the reversed words back into a string  
console.log(reversedWords);