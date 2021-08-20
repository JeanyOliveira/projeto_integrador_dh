

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
        
    },
    exibirLogin: (req, res)=>{
        res.render('login');
    },
    exibirCategoria:(req, res)=>{
        res.render('categoria');
    }
}

module.exports = indexController;