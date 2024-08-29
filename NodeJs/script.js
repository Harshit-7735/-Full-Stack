const fs = require('fs');

const data = "Hello World"

fs.writeFileSync('test.txt',data)
fs.writeFile('test2.txt',data,(err)=>{
    if(err) throw err;
    console.log("File written successfully");
    
})