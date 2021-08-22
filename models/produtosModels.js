const {
    v4: uuidv4
} = require('uuid');
const produtoModel = {
    listaDeProdutos: [{
            id: uuidv4(),
            nome: 'caminha',
            descricao: 'Uma caminha pro seu doguinho',
            imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfASUAKgtGERKUbTqgn0-NbEi86jcqVzOCTTD_UD9aOt8wdojCzhx80xZr1-67fB6s70KLrNc&usqp=CAc',
        },
    ],
    cadastrarProduto: function (nome, descricao, imagem) {
        const novoProduto = {
                id: uuidv4(),
                nome,
                descricao,
                imagem,
            };
            return this.listaDeProdutos.push(novoProduto);
    },
    excluirProduto: function (id) {
        const novaListaDeProdutos = this.listaDeProdutos.filter(
            (produto) => produto.id !== id
        );
        if (novaListaDeProdutos.length >= this.listaDeProdutos.length) return false;
        this.listaDeProdutos = novaListaDeProdutos;
        return true;
    },
}


module.exports = produtoModel;