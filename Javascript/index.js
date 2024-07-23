/*
const arr=[1,2,3,4,5];
console.log(arr);
arr.push(6);
console.log(arr);
arr.pop();
console.log(arr);
console.log(arr.length);

arr.unshift(0);
console.log(arr);
arr.shift();
console.log(arr);
*/
/*
const arr = ["apple", "banana", "cherry"];
const callback = function (item, index) {
  console.log(item, index);
};
arr.forEach(callback);
*/


/*
const arr=["jpe","jane","jack"]
arr.forEach(function(item,index){
  console.log(item,index);
})
  */


const arr=[1,2,3,4,5,6,7,8,9,10]
const newArr=[]

// for(let i=0;i<arr.length;i++){
//   newArr.push(arr[i]*19)
// }

// arr.forEach(function(item){
//   newArr.push(item*19)
// })

// foreach doesn't return anything 
// map returns
/*
const newArr2=arr.map(function(item){
  return item*19;
})
console.log(newArr2);
*/

const reduceFunction=function(prev,curr){
  console.log(prev,curr)
  return prev+curr;
}
const res2=arr.reduce(reduceFunction,0)
console.log(res2);
