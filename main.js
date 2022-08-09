const express = require("express");
const app = express();
const port = 3000

app.get('/', (req,res) => {
    res.send("help!");
})

app.post('/', (req,res) => {
    res.send("help!");
})

app.listen(port, () => {
    console.log(`Server Run http://127.0.0.1:${port}`)
})