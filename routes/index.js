const express = require('express');
const path = require("path");
const isLogin = require('../middlewares/isLogin');
const produtos = require('../models/produtosModels');
const routes = express.Router();

const indexController = require('../controllers/indexController');
const cadastarCategoriaController = require('../controllers/cadastrarCategoriaController');


routes.get("/", isLogin, indexController.exibirHome);
routes.get("/home", isLogin, indexController.exibirHome);

routes.get("/produto", indexController.exibirProduto);

routes.get("/produtos", indexController.exibirProdutos);

routes.get("/quemsomos", indexController.exibirQuemsomos);

routes.get("/carrinho", indexController.exibirCarrinho);

routes.get("/login", indexController.exibirLogin);

routes.get("/categoria", indexController.exibirCategoria);

routes.get("/admin", isLogin, indexController.exibirAdmin)

routes.get("/admin/adminprodutos", isLogin, indexController.exibirAdminProdutos)

routes.get("/admin/cadastrocategoria", isLogin, indexController.exibirCadastroCategoria)

routes.post("/cadastarCategoria", isLogin, cadastarCategoriaController.category)

routes.get("/admin/admincategorias", isLogin, indexController.exibirAdminCategorias)

routes.get("/finalizacaodecompra", isLogin, indexController.exibirFinalizacaodecompra);

module.exports = routes;