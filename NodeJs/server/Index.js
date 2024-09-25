const express = require("express");
const fs = require("fs/promises");
// console.log(express);

const PORT = 8080;
// express instance
const app = express();

app.get("/", (req, res) => {
  // console.log(req);
  const { headers, method, url, path, query } = req;
  console.log({
    headers,
    method,
    url,
    path,
    query,
  });

  res.status(200).send("Server is Running");
});
// app.get('/todos',(req,res)=>{
//     res.status(200).send('todos')
// })

app.get("/todos", async (req, res) => {
  try {
    const {count} = req.query
    const todos = await fs.readFile("./db.json", "utf-8");
    const parsedtodos= JSON.parse(todos)
    console.log(todos);
    res.status(200).json((parsedtodos.slice(0,count)));
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
