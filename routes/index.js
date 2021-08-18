const express = require('express');
const path = require("path");
const routes = express.Router();

const indexController = require('../controllers/indexController');


routes.get("/", (req, res) => {
    res.render('home');
});

routes.get("/home", indexController.exibirHome);

routes.get("/produto", indexController.exibirProduto);

routes.get("/produtos", indexController.exibirProdutos);

routes.get("/quemsomos", indexController.exibirQuemsomos);

routes.get("/carrinho", indexController.exibirCarrinho);

routes.get("/login",(req, res)=>{
    res.render('login');
})

module.exports = routes;