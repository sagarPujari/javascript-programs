function Car(make, model) {  
    this.make = make;     // Property  
    this.model = model;   // Property  
    this.drive = function() {  // Method  
      console.log(`Driving a ${this.make} ${this.model}`);  
    };  
  }  
  
  const car1 = new Car('Toyota', 'Camry');  
  const car2 = new Car('Honda', 'Accord');  
  
  car1.drive(); // Outputs: Driving a Toyota Camry  
  car2.drive(); // Outputs: Driving a Honda Accord