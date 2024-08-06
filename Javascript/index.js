const fetchTodos =() => new Promise((resolve, reject) => {
    setTimeout(() => {
        // it takes 2 seconds to fetch the data from the server and return it as a promise object
        // resolve([{id: 1, title: 'Todo 1'}, {id: 2, title: 'Todo 2'}]);
        reject(new Error('Unable to fetch the data from the server'));
    }, 2000);
})
fetchTodos()
.then((data)=>{console.log(data)})
.catch((error)=>{console.log(error)})
