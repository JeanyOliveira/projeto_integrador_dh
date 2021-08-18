

const indexController = {
    exibirHome: (req, res) => {
        res.render('home');
    },
    
    exibirProduto: (req, res) => {
        res.render('produto');
    },

    exibirProdutos: (req, res) => {
        res.render('produtos');
    },

    exibirQuemsomos: (req, res) => {
        res.render('quemsomos');
    },
    
    exibirCarrinho: (req, res) => {
        res.render('carrinho');
    }
}

module.exports = indexController;