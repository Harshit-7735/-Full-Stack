const fs = require("fs");

// const data= fs.rm('test.txt',(err)=>{
//     if (err) throw err;
//     console.log(data,'file removed');
// })

const createFile = (data,name)=>{
    try {
         fs.writeFileSync(name,data)
        console.log('file written');
        
    } catch (error) {
        console.log(error);
        
    }
}

createFile('hello world','test.txt')