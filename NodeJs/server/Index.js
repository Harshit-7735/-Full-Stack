const express = require("express");
const fs = require("fs/promises");
const uuid = require("uuid");

const PORT = 8080;
// expres instance
const app = express();
app.use(express.json());

app.get('/todo/:name',(req,res)=>{
    const {name} = req.params;
    res.send(`hello ${name}`)
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
