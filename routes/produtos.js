const express = require('express');
const produtoController = require('../controllers/produtoController');
const routes = express.Router();
const upload = require('../middlewares/upload');
const isLogin = require('../middlewares/isLogin');

routes.get('/admin/cadastro-produto', isLogin, produtoController.cadastrarProduto);
routes.get('/admin/produtosAdmin', isLogin, produtoController.listarProdutosAdmin);
routes.post('/salvar-produto', isLogin, upload.single("image"), produtoController.salvarProduto);
routes.delete('/deletar-produto/:id', isLogin, produtoController.deletarProduto);
routes.get('/editar-produto/:id', isLogin, produtoController.editarProduto)
routes.put('/salvar-edicao-produto/:id', isLogin, upload.single("image"), produtoController.salvarEdicao)

routes.get('/produtoModels/:id', (req, res) =>{
    if(typeof Number(req.params.id) != "number") {
        return res.send('Deve digitar um numero');
    }

    res.send('Pagina de produtos');
});

module.exports = routes;