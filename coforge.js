// Original string  
const str = "co#f@6org1e+ &cof^o!r9g{e";  

// Step 1: Remove special characters and numerals  
const cleanedStr = str.replace(/[^a-zA-Z]/g, '');  

// Step 2: Find duplicates  
const duplicates = [];  
const charCount = {};  

// Count occurrences of each character  
for (const char of cleanedStr) {  
    charCount[char] = (charCount[char] || 0) + 1;  
}  

// Identify duplicates based on count  
for (const [char, count] of Object.entries(charCount)) {  
    if (count > 1) {  
        duplicates.push(char);  
    }  
}  

// Print duplicates  
console.log('Duplicates:', duplicates.join(', '));  

// Step 3: Remove duplicates and print unique characters  
const uniqueChars = [...new Set(cleanedStr)]; // Using Set to remove duplicates  
console.log('Unique characters:', uniqueChars.join(''));