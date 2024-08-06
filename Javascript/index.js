const response =fetch('https://jsonplaceholder.typicode.com/todos')
// console.log(response);
// fetch is a inbuilt function in javascript which is used to make a network request to the server. It returns a promise object. 
//axios is a library which is used to make a network request to the server. It returns a promise object.
// The difference between fetch and axios is that fetch is a built-in function in javascript whereas axios is a library.
// fetch is not supported in all browsers whereas axios is supported in all browsers.
response.then((data)=>{console.log(data)})// it will return the array of objects which is present in the server. while axios returns the object of array of objects.
// fetch returns the response object whereas axios returns the data object.
