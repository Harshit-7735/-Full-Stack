// Async and await
// Async and await are used to handle promises in a more elegant way.
// Async makes a function return a Promise
// Await makes a function wait for a Promise

/*
const fetchData = async () => { // earlier we used to write .then() and .catch() to handle promises but now we can use async and await to handle promises in a more elegant way. 
    // we are not getting pending promise here because we are using async and await to handle promises.

    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    console.log(response); // response does its thing and returns a promise
}
fetchData();*/

// TRY CATCH FINALLY
const fetchData = async () => {
  try {
    
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    console.log(3);

    // const data= await response.json();
    // console.log(data);
    console.log(response);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("finally block");
  }
};
console.log(1);

fetchData();
console.log(2);

// Output:
// 1 2 3 data finally block 
// it is because of async and await. It is not blocking the code. It is running the code in the background and when it is done it will come back and execute the code.