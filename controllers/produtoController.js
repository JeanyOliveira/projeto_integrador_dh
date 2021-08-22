const produtoModel = require('../models/produtosModels');
const produtoController = {
    listarProdutosAdmin: (req, res) => {
        res.render('admin/produtosAdmin', {
            produtos: produtoModel.listaDeProdutos,
        });
    },
    cadastrarProduto: (req, res) => {
        res.render('admin/cadastroProduto');
    },
    salvarProduto: (req, res) => {
        console.log(req.body);
        const { nome, preco, imagem } = req.body;
        produtoModel.cadastrarProduto(nome, preco, imagem);

        console.log(produtoModel.listaDeProdutos);

        res.redirect('/admin/produtosAdmin');
    },
    deletarProduto: ( (req, res) => {
        const { id } = req.params;
        const resultado = produtoModel.excluirProduto(id);
        if (!resultado) {
            res.send('Deu ruim');
        }

        res.redirect('/admin/produtosAdmin');
    })
};

module.exports = produtoController;