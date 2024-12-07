function capitalizeFirstLetterOfEachWord(str) {
    const words = str.split(" ");
    const capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
        
    });
    return capitalizedWords.join(" ");
    //return str.replace(/\b\w/g, l => l.toUpperCase()); 
}
const inputString = "hello world this is a sample string";
const capitalizedString = capitalizeFirstLetterOfEachWord(inputString);
console.log("Capitalized string:", capitalizedString);
