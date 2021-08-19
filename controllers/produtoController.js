const produtoModel = require('../models/produtosModels');
const produtoController = {
    listarProdutosAdmin: (req, res) => {
        res.render('admin/produtosAdmin');
    },
    cadastrarProduto: (req, res) => {
        res.render('admin/cadastroProduto');
    },
    salvarProduto: (req, res) => {
        console.log(req.body);
        const { nome, preco, pet, imagem } = req.body;
        produtoModel.cadastrarProduto(nome, preco, pet, imagem);

        console.log(produtoModel.listaDeProdutos);

        res.send('Cadastro concluido');
    },
};

module.exports = produtoController;