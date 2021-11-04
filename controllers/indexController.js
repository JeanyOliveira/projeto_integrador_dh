

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
    exibirLogin: (req, res) => {
        res.render('login');
    },
    exibirCategoria: (req, res) => {
        res.render('categoria');
    },
    exibirFinalizacaodecompra: (req, res) => {
        res.render('finalizacaodecompra');
    },
    exibirAdmin: (req,res) => {
        res.render('admin/admin');
    },
    exibirAdminProdutos: (req,res)=>{
        res.render('admin/adminprodutos');
    },
    exibirAdminCategorias: (req,res)=>{
        res.render('admin/admincategorias')
    },
    exibirCadastroCategoria: (req, res) => {
        res.render("admin/cadastrocategoria");
    }
    
}

module.exports = indexController;