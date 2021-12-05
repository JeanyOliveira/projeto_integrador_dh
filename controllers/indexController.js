const { Product } = require('../models')
const {Category}= require("../models");
const { render } = require("ejs");

const indexController = {

    async exibirHome(req, res) {
        let produtos = await Product.findAll() 
        res.render('home', { "produtos": produtos});
    },

    exibirProduto: (req, res) => {
        res.render('produto');
    },

    async exibirProdutos(req, res){
        try {
            const listaDeProdutos = await Product.findAll();
            console.log("lista aqui ", listaDeProdutos)
            render('components/cards', { produtos: listaDeProdutos});
            
            console.log("aquiiiii: ", listaDeProdutos)
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