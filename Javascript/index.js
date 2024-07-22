// function greet(){
//     console.log("Hello World");
//     // return "Hello World";

// }
// greet()

// const result= greet()
// console.log(result);// undefined because greet function does not return anything so it will return undefined



// function greet(Name, age) {
//   console.log("Hello " + Name + " you are " + age + " years old");
// }
// // greet("John",25)
// greet("Jane");


/*
// it is a function
greet1("John", 25);
function greet1(Name, age) {
  console.log("Hello " + Name + " you are " + age + " years old");
}
// it is a variable that holds a function
greet2("Jane", 25);
  const greet2 = function (Name, age) {
    console.log("Hello " + Name + " you are " + age + " years old");
    }
    // greet2("John", 25);
    // greet("Jane", 25);
*/
    console.log(this)
const obj={
    name:'Jane',
    greet:function(){
        console.log(this)
    }
}
obj.greet()// it will return the object obj because this keyword is used inside the object obj
