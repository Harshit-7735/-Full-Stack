const fs = require("fs");

const data= fs.rm('test.txt',(err)=>{
    if (err) throw err;
    console.log(data,'file removed');
})
