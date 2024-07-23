/*
class car {
  name = "BMW"; // property of class car
  // consructor is a special method in class which is called when an object is created of that class
  constructor() {
    console.log("Constructor called");
  }
}
// Creating an object of class car
// new keyword is used to create an object of class
const car1 = new car();
console.log(car1);
*/

/*
class car {
  constructor(name, brand) {
    this.name = name;
    this.brand = brand;
    // this is pointing to the object of the class car which is created using new keyword
    console.log(this); // this keyword is used to access the properties of the class inside the class itself
  }
}
const car1 = new car("BMW", "X5");
// console.log(car1);
*/

class car {
  // we can also define properties of class outside the constructor method
  age = 30;
  adult = true;
  constructor(name, brand) {
    this.name = name;
    this.brand = brand;
    this.age = 40; // we can also change the value of properties of class inside the constructor method using this keyword

    console.log(this); 
  }
  // we can also define methods of class outside the constructor method using function keyword
  greet() {
    console.log("Hello, I am " + this.name);
  }
}
const car1 = new car("BMW", "X5");
car1.greet(); // calling the method of class car using object of class car
