// Factory function for creating a new object that represents a single task item in the list of tasks.

function bike(){
  console.log(this); // points to the global object
}
const bike1 = new bike(); // not pointing to the global object
console.log(bike1);