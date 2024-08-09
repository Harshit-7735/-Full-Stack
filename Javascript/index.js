// Async and await
// Async and await are used to handle promises in a more elegant way.
// Async makes a function return a Promise
// Await makes a function wait for a Promise

const fetchData = async () => { // earlier we used to write .then() and .catch() to handle promises but now we can use async and await to handle promises in a more elegant way. 
    // we are not getting pending promise here because we are using async and await to handle promises.

    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    console.log(response); // response does its thing and returns a promise
}
fetchData();