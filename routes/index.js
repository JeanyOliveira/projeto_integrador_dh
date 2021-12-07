const express = require('express');
const path = require("path");
const isLogin = require('../middlewares/isLogin');
const isAdmin = require('../middlewares/isLogin');
const produtos = require('../models/produtosModels');
const routes = express.Router();

const indexController = require('../controllers/indexController');
const cadastarCategoriaController = require('../controllers/cadastrarCategoriaController');


routes.get("/", indexController.exibirHome);
routes.get("/home", indexController.exibirHome);

routes.get("/produto", indexController.exibirProduto);

routes.get("/quemsomos", indexController.exibirQuemsomos);

routes.get("/carrinho", indexController.exibirCarrinho);

routes.get("/login", indexController.exibirLogin);

routes.get("/categoria", indexController.exibirCategoria);

routes.get("/admin", isAdmin, indexController.exibirAdmin)

routes.get("/admin/adminprodutos", isAdmin, indexController.exibirAdminProdutos)

routes.get("/admin/cadastrocategoria", isAdmin, indexController.exibirCadastroCategoria)

routes.post("/cadastarCategoria", isAdmin, cadastarCategoriaController.category)

routes.get("/admin/admincategorias", isAdmin, indexController.exibirAdminCategorias)

routes.get("/finalizacaodecompra", isLogin, indexController.exibirFinalizacaodecompra);

module.exports = routes;