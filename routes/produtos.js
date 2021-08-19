const express = require('express');
const produtoController = require('../controllers/produtoController');
const routes = express.Router();
const { uuid } = require('uuidv4');


routes.get('/admin/cadastro-produto', produtoController.cadastrarProduto);
routes.get('/admin/produtosAdmin', produtoController.listarProdutosAdmin);
routes.get('/salvar-produto', produtoController.salvarProduto);

module.exports = routes;