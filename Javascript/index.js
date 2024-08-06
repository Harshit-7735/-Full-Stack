/*
const response = fetch("https://jsonplaceholder.typicode.com/todos").then(
  (response) => {
    console.log(response);
    // its a async function so we need to use then to get the data from the response object
    const data = response.json(); // we have to wait for the data to be fetched from the server so we use then to get the data from the response object
    data.then((data) => {
      console.log(data);
    });
  }
);
*/

const ul=document.createElement('ul');
document.body.appendChild(ul);
// chaining the promises
const response = fetch("https://jsonplaceholder.typicode.com/todos") // it will return a promise
  .then(response => response.json()) // it  will return a promise so we can chain another then method
  .then(data => 
    data.forEach(element => {
      const li=document.createElement('li');
      li.innerText=element.title;
      ul.appendChild(li);
    })
  ) // it will return the data from the promise
  .catch(error => console.log(error))
   // if there is any error in the promise then we can catch it using catch method