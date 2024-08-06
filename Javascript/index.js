const response = axios.get("https://jsonlaceholder.typicode.com/posts");
console.log(response); // initially this will log a promise object and its state is pending
// then is a promise function that is called when the promise is resolved or rejected
// it takes a callback function as an argument
// the callback function takes an argument that is the data returned from the promise
response.then((data) => {
  console.log(data);
});


// what if something goes wrong?
// we can use the catch method to handle errors
response.catch((error) => {
  console.log(error,"data not found");
});