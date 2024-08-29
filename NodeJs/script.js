const fs = require("fs");

const data = fs.readFileSync("test.txt", "utf8");
fs.readFile('test.txt','utf8',(err,data)=>{
    if (err) throw err;
    console.log(data,'async')
})
console.log(data,'sync');
