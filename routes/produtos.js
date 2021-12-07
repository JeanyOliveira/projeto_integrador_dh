const express = require('express');
const produtoController = require('../controllers/produtoController');
const routes = express.Router();
const upload = require('../middlewares/upload');
const isLogin = require('../middlewares/isLogin');
const isAdmin = require('../middlewares/isLogin');

routes.get('/admin/cadastro-produto', isAdmin, produtoController.cadastrarProduto);
routes.get('/admin/produtosAdmin', isAdmin, produtoController.listarProdutosAdmin);
routes.post('/salvar-produto', upload.single("image"), produtoController.salvarProduto);
routes.delete('/deletar-produto/:id', produtoController.deletarProduto);
routes.get('/editar-produto/:id', produtoController.editarProduto)
routes.put('/salvar-edicao-produto/:id', upload.single("image"), produtoController.salvarEdicao);

module.exports = routes;