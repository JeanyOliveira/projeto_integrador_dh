const express = require('express');
const path = require("path");
const produtos = require('../models/produtosModels');
const routes = express.Router();

const indexController = require('../controllers/indexController');


routes.get("/", indexController.exibirHome);
routes.get("/home", indexController.exibirHome);

routes.get("/produto", indexController.exibirProduto);

routes.get("/produtos", indexController.exibirProdutos);

routes.get("/quemsomos", indexController.exibirQuemsomos);

routes.get("/carrinho", indexController.exibirCarrinho);

routes.get("/login", indexController.exibirLogin);

routes.get("/categoria", indexController.exibirCategoria);

routes.get("/admin", indexController.exibirAdmin)

routes.get("/admin/adminprodutos", indexController.exibirAdminProdutos)

routes.get("/admin/cadastrocategoria", indexController.exibirCadastroCategoria)

routes.get("/admin/admincategorias", indexController.exibirAdminCategorias)

routes.get("/finalizacaodecompra", indexController.exibirFinalizacaodecompra);

module.exports = routes;