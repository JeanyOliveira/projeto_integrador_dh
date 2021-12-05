const { Product } = require('../models')
const {Category}= require("../models");

const indexController = {

    async exibirHome(req, res) {
        let produtos = await Product.findAll() 
        res.render('home', { "produtos": produtos});
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