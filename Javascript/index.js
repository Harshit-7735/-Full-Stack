
const node=document.getElementById('heading');
/*
// node.innerHTML='Hello World';
node.innerHTML=`<i>this is italic</i>`
node.style.color='red';
console.log(node);
console.dir(node);
console.log(node.innerHTML);
*/

const listItems=document.getElementsByClassName('list-item');
// get elements by class name return an array of matching elements  if no element found it will return an empty array
// get elements by id return a single element 
console.log(listItems);
// console.log(node);

// tag name is used to get elements by tag name 
// it will return an array of matching elements
const tag=document.getElementsByTagName('li');
// console.log(tag);

// query selector is used to get elements by css selector 
// it will return the first matching element
const element=document.querySelector('li:last-child');
// console.log(element);


const elements=document.querySelectorAll('li');
console.log(elements);