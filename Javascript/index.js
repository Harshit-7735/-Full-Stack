// console.log(axios);

const response = axios.get('https://jsonplaceholder.typicode.com/todos');// it will take some time to get the response
console.log(response);

setTimeout(() => {
    console.log(response);
}, 3000); // it will print the response after 3 seconds and it is fulfilled promise object with the response data and other properties 
//it's because of the asynchronous nature of the axios.get() method and the setTimeout() function.
