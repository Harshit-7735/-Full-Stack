// const { v4: uuidv4 } = require('uuid');
// const id = uuidv4();
// console.log(id);

const axios= require('axios')

const fetchdata= async()=>{
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log(res.data);
        
    } catch (error) {
        console.log(error);
        
    }
}
fetchdata()
