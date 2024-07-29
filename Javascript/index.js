// SET Interval

const Heading = document.querySelector("h1");
const body = document.querySelector("body");
/*
const HandleClick = () => {
  // Function to be called
  console.log("Hello World");
};
setInterval(HandleClick()); // Function to be called after every 1 second
*/

/*
let count = 0;
const log = () => {
  Heading.innerHTML = count++;
};
setInterval(log, 1000); // Function to be called after every 1 second
*/

/*
// Wap to generate random color after every 1 second
setInterval(() => {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    body.style=`
    background-color: #${randomColor};`

}, 1000);
*/

// Using Javascript and DOM api
/*
const todos=['Buy Milk','Go to Gym','Record Youtube Videos','Learn Javascript'];
const li=document.createElement('li');
console.log(li);
// Adding text inside li element using innerHTML
li.innerHTML='New Todo';

// Using text node to add text inside li element 
const textinsideli=document.createTextNode('New Todo');
li.appendChild(textinsideli);
console.log(textinsideli);
*/


/*
const todos=['Buy Milk','Go to Gym','Record Youtube Videos','Learn Javascript'];
const list=document.querySelector('ul');
todos.forEach((todo)=>{
    const li=document.createElement('li');
    li.innerHTML=todo;
    list.appendChild(li);

})
    */

const input=document.querySelector('input');
const list=document.querySelector('ul');

const HandleClick=()=>{
    const li=document.createElement('li');
    li.innerHTML=input.value;
    list.appendChild(li);
    input.value='';
}

const ToggleTheme=()=>{
    // if(body.classList.contains('light')){
    //     body.classList.remove('light');
    //     body.classList.add('dark');
    // }
    // else{
    //     body.classList.add('light');
    //     body.classList.remove('dark');
    // }
    
}
