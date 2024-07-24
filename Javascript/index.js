// const greet=function(){
//     console.log('Hello');
// }
// greet();

//                  BY using arrowFunction

// const greet=()=>{
//     console.log('Hello');
// }
// greet();

// const greet=()=>console.log('Hello');
// greet();

// Wap to add two numbers
/*
const sum=function(a,b){
  return a+b;
}
console.log(sum(10,20));
*/
/*
const Arrowsum=(a,b)=>a+b;
console.log(Arrowsum(10,20));*/

/*
const arr=[{name:'Rahul',age:20},{name:'Rohit',age:21},{name:'Raj',age:22}];
const newArr=arr.filter(item=>item.age>20);
console.log(newArr);
*/

/*
const a = {
  name: "Rahul",
  age: 20,
  greet: function () {
    console.log("Hello");
  },
};

const b = Object.keys(a).reduce((prev, curr) => {
  console.log(prev, curr);
  prev[curr] = a[curr];
  return prev;
}, {});
*/

// const arr = [1, 2, 3, 4, 5];
// const sum=arr.reduce((prev,curr)=>prev+curr,0);
// console.log(sum);

const obj = {
  name: "Rahul",
  age: 20,
  greet: function () { // Normal function has its own this keyword so it will take the this keyword of its parent
    console.log(this);
  },
  greetArrow: () => { // Arrow function does not have its own this keyword so it will take the this keyword of its parent
    console.log(this);
  },
};
obj.greet();
obj.greetArrow();


const greet = function (Name,age) {
  console.log("Hello " + Name + " Your age is " + age);
}
greet(20);
