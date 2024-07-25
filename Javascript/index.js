/*
const a ="Hello"
const  b="World"

const c=`${a} ${b}`; // concatination of two strings
console.log(c);
*/

// DESTRUCTURING
const arr = ["Hello", "World"];

// It's a normal method
// const name1=arr[0];
// const name2=arr[1];
// const name3=arr[2];

const [name1, name2] = arr;
console.log(name1, name2);

// DESTRUCTURING OF AN OBJECT

const obj = {
  name: "Harshit",
  cars: ["Audi", "Mercedes"],

  address: {
    city: "bangalore",
  },
};
const { name, cars, address } = obj;
console.log(name, cars, address);
// Aliasing of the object properties
// Aliasing is a process of giving a new name to the object properties
const {cars:pizza}=obj;
console.log(pizza);
// destructuring of an array while destructuring of an object
const {cars:[,car2]}=obj;
console.log(car2);

const {address:{city}}=obj;
console.log(city);