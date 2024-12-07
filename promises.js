let myPromise = new Promise((resolve, reject) => {  
    let success = false; // Simulate success or failure  
    if (success) {  
        resolve("Operation succeeded!");  
    } else {  
        reject("Operation failed.");  
    }  
});  

myPromise  
    .then(result => console.log(result))  // If fulfilled  
    .catch(error => console.log(error));  // If rejected