//  SPREAD OPERATOR
// spread operator is used to spread the elements of an array or object into another array or object respectively 
// spread operator is used to make a copy of an array or object
// spread operator is used to merge two arrays or objects

/*
const arr=["a","b","c"];
// console.log(...arr);
const arr2=[...arr,1,2,3,4]
console.log(arr2);

const arr3=[...arr];
arr[0]="z";
console.log(arr3);

const arr4=arr
arr[0]='rcb'
console.log(arr4);
*/


const obj={
  name:"sachin",
  age:40,
  cars:["audi","bmw"],
  address:{
    city:"bangalore",
    pincode:560037
  }
}

const obj2={
  ...obj,
  age:30
}
obj.name="rahul" // this will not change the name in obj2 as it is a value type and it will not change the value in both the objects
obj.address.city="mumbai" // this will change the city in obj2 also as it is a reference type and it will change the value in both the objects

console.log(obj2);

