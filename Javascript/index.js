// pass by reference
const obj={
  name:"john",
  // age:30,
}
// javascript is a reference type language so when we create a object and assign it to another object then both objects will point to the same memory location
const obj1=obj;
obj.name="peter"; // we can override the value of original object by changing the value of obj1
obj1.age=25; // we can add new property to the original object by adding the property to obj1
console.log(obj1);


// primitive types are not reference type so when we assign a value to another variable then both variables will point to different memory location
//pass by value
let a=10;
let b=a;
a=20;
console.log(b); // it will print 10
console.log(a); // it will print 20