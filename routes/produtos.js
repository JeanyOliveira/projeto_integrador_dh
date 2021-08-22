const express = require('express');
const produtoController = require('../controllers/produtoController');
const routes = express.Router();

routes.get('/admin/cadastro-produto', produtoController.cadastrarProduto);
routes.get('/admin/produtosAdmin', produtoController.listarProdutosAdmin);
routes.post('/salvar-produto', produtoController.salvarProduto);
routes.delete('/deletar-produto/:id', produtoController.deletarProduto);


routes.get('/produtosModels/:id', (req, res) =>{
    if(typeof Number(req.params.id) != "number") {
        return res.send('Deve digitar um numero');
    }

    res.send('Pagina de produtos');
});

module.exports = routes;