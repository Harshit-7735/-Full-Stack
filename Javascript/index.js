// JSON :java script object notation
// JSON is a syntax for storing and exchanging data.

const obj1 = {
  name: "Harshit",
  age: 22,
  ismarried: true,
};

const car={
    model:"Audi",
    year:2021,
}
const obj = {
  name: "Harshit",
  age: 22,
  ismarried: false,
  // function inside object is called method
  greet: function () {
    console.log("Hello there");
  },
  // an object can have another object as a property
  address: {
    city: "Delhi",
    state: "Delhi",
  },
  //an object can have array inside an object as a property
  hobbies: ["coding", "reading", "travelling"],
  //an object can have another object as a property
  obj1: obj1,
  car:car,
};
console.log(obj);
// accessing object properties
obj.greet();
console.log(obj.address);
console.log(obj.hobbies);
