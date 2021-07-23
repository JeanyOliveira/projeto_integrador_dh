const express = require("express");
const app = express();

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
});

app.listen(4000, () => {
    console.log("O servidor está rodando na porta 4000");
});