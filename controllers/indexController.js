const { Product } = require('../models')
const { Category }= require("../models");
const { Cart } = require("../models")
const { render } = require("ejs");

const indexController = {

    async exibirHome(req, res) {
        let produtos = await Product.findAll() 
        res.render('home', { "produtos": produtos});
    },

    async exibirProduto(req, res) {
        try {
            let produto = await Product.findByPk(req.params.id)

            if (produto == null)
                return res.render("home", { error: "Produto não encontrado." })
            return res.render('produto', { 'produto': produto});
        } catch (error) {
            res.redirect("/home")
        }
    },

    async exibirProdutos(req, res){
        try {
            const listaDeProdutos = await Product.findAll();
            render('components/cards', { produtos: listaDeProdutos});
            
            return res.render('produtos', {
                produtos:listaDeProdutos
            });   

        } catch (error) {
            return res.render("home", {error: "Erro ao carregar produtos"})
        }
    },

    exibirQuemsomos: (req, res) => {
        res.render('quemsomos');
    },

    exibirOfertas:(req,res) =>{
        res.render('ofertas')
    },

     async exibirCarrinho (req, res) {
         const {user} = req.session;

            try {
                const cart = await Cart.findAll({
                    where: {
                        userid: user.id,
                    }
                })
            
                return res.render("carrinho",{Cart: cart});
            }catch(error){
                console.log(error)
            }
        },
    exibirLogin: (req, res) => {
        res.render('login');
    },
    async exibirCategoria(req, res) {
            try{
                const categorys = await Category.findAll({   
                    model: Category,
                })
            
                return res.render("categoria",{Category: categorys});
            }catch(error){
                console.log(error)
            }
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