const express = require('express')
// console.log(express);

const PORT=8080;
// express instance
const app = express()

app.get('/',(req,res)=>{
    // console.log(req);
    const {headers,method,url,path,query}=req
    console.log({
        headers,
        method,
        url,
        path,query
    });
    
    res.send('hello world')
    
})
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    
})
