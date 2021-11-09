const express = require('express');
const produtoController = require('../controllers/produtoController');
const routes = express.Router();
const upload = require('../middlewares/upload')

routes.get('/admin/cadastro-produto', produtoController.cadastrarProduto);
routes.get('/admin/produtosAdmin', produtoController.listarProdutosAdmin);
routes.post('/salvar-produto', upload.single("image"), produtoController.salvarProduto);
routes.delete('/deletar-produto/:id', produtoController.deletarProduto);
routes.get('/editar-produto/:id', produtoController.editarProduto)
routes.put('/salvar-edicao-produto/:id', upload.single("image"), produtoController.salvarEdicao)


routes.get('/produtoModels/:id', (req, res) =>{
    if(typeof Number(req.params.id) != "number") {
        return res.send('Deve digitar um numero');
    }

    res.send('Pagina de produtos');
});

module.exports = routes;