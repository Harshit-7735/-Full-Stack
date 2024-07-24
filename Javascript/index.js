const a = {
  name: "Harshit",
  age: 30,
  isMarried: true,

  greet: function () {
    console.log("Hello");
  },
};
// for (const key in a) {
//   console.log(key, a[key]);
// }

// console.log(Object.keys(a));
// console.log(Object.values(a));

// const b={}
// const reducefunction =function(prev,curr){
//   console.log(prev,curr);
//   // Dry run of the code below
//   // prev={}
//   // curr=name
//   // prev[name]=a[name]
//   // prev={name:"Harshit"}
//   // curr=age
//   // prev[age]=a[age]
//   // prev={name:"Harshit",age:30}
//   // curr=isMarried
//   // prev[isMarried]=a[isMarried]
//   // prev={name:"Harshit",age:30,isMarried:true}
//   // curr=greet
//   // prev[greet]=a[greet]
//   // prev={name:"Harshit",age:30,isMarried:true,greet:function(){console.log("Hello")}}
//   prev[curr]=a[curr]
//   return prev
// }
// Object.keys(a).reduce(reducefunction,b)
// console.log(b);

const arr = [
  { name: "Harshit", age: 30 },
  { name: "Amit", age: 25 },
  { name: "Rahul", age: 35 },
];
/*
const b={}
const reducefunction=function(prev,curr){
  // dry run of the code below
  // prev={}
  // curr={name:"Harshit",age:30}
  // prev[name]=age
  // prev={Harshit:30}
  // curr={name:"Amit",age:25}
  // prev[Amit]=25
  // prev={Harshit:30,Amit:25}
  // curr={name:"Rahul",age:35}
  // prev[Rahul]=35
  // prev={Harshit:30,Amit:25,Rahul:35}
  prev[curr.name]=curr.age // it will return the object with name as key and age as value 
  return prev
}
console.log(arr.reduce(reducefunction,b));  
*/

/*
const findFn = function (item, index) {
  if (item.name === "Amit") {
    return true;
  }
  return false;
};
const ele = arr.find(findFn);
console.log(ele); // {name:"Amit",age:25}
*/

/*
const filterfn=function(item,index){
  if(item.age>30 && item.name==="Rahul"){
    return true
  }
  return false
}
const ele=arr.filter(filterfn)
console.log(ele); // [{name:"Rahul",age:35}]
*/

/*
const arrr=[1,2,3,4,5]
const reduceFn=function(prev,curr){
  return prev+curr
}
console.log(arrr.reduce(reduceFn,0)); // 15
*/

const arrr = [1, 2, 3, 4, 5];
arrr.splice(1,0,99)
arrr.splice(2,0,100)
arrr.splice(3,0,101)
console.log(arrr);

console.log(arrr.splice(1,5)); // [99,100,101,2,3]
console.log(arrr.splice(2,1)); // [100]
console.log(arrr.splice(3,1)); // [101]
console.log(arrr); // [1,2,3,4,5]