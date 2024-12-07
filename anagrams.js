//Method 1
function areAnagrams(str1, str2) {  
    // Remove spaces and convert to lowercase  
    str1 = str1.replace(/\s+/g, '').toLowerCase();  
    str2 = str2.replace(/\s+/g, '').toLowerCase();  

    // Sort and compare  
    return str1.split('').sort().join('') === str2.split('').sort().join('');  
}  

// Example usage:  
console.log(areAnagrams("listen", "silent")); // true  
console.log(areAnagrams("hello", "world"));   // false

//method 2
function areAnagrams(str1, str2) {  
    // Remove spaces and convert to lowercase  
    str1 = str1.replace(/\s+/g, '').toLowerCase();  
    str2 = str2.replace(/\s+/g, '').toLowerCase();  

    // Check if lengths are the same  
    if (str1.length !== str2.length) {  
        return false;  
    }  
    
    const charCount = {};  

    // Count characters in the first string  
    for (const char of str1) {  
        charCount[char] = (charCount[char] || 0) + 1;  
    }  

    // Decrease the count for characters found in the second string  
    for (const char of str2) {  
        if (!charCount[char]) {  
            return false; // Character not found, not an anagram  
        }  
        charCount[char]--;  
    }  

    // Final check to ensure all counts are zero  
    return Object.values(charCount).every(count => count === 0);  
}  

// Example usage:  
console.log(areAnagrams("listen", "silent")); // true  
console.log(areAnagrams("hello", "world"));   // false