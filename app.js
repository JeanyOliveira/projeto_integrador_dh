const express = require("express");
const app = express();

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
});

app.get("/home", (req, res) => {
    res.redirect("/");
});

app.get("/carrinho", (req, res) => {
    res.sendFile(__dirname + "/views/carrinho.html");
});

app.get("/finalizacao da compra", (req, res) => {
    res.sendFile(__dirname + "/views/finalizacao-de-compra.html");
});

app.get("/produtos", (req, res) => {
    res.sendFile(__dirname + "/views/listagem-de-produtos.html");
});

app.get("/quemsomos", (req, res) => {
    res.sendFile(__dirname + "/views/quem-somos.html");
});

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/views/login-cadastro.html");
});

app.get("/usuario", (req, res) => {
    res.sendFile(__dirname + "/views/painel-do-usuario.html");
});

app.get("/produto interno", (req, res) => {
    res.sendFile(__dirname + "/views/produto-interno.html");
});

app.listen(4000, () => {
    console.log("O servidor está rodando na porta 4000");
});