const { render } = require("ejs");
const { Product } = require("../models")

const produtoController = {
    async listarProdutosAdmin (req, res) {
        try {
            const listaDeProdutos = await Product.findAll();

            return res.render('admin/produtosAdmin', {
                produtos:listaDeProdutos
            });   

        } catch (error) {
            return res.render("home", {error: "Erro ao carregar produtos"})
        }
    },
    cadastrarProduto: (req, res) => {
        res.render('admin/cadastroProduto');
    },
    async salvarProduto(req, res) {
        try {
            const {name, preco, description} = req.body
            const { filename } = req.file
            await Product.create({
                name,
                preco,
                description,
                image: filename
            })

            return res.redirect("admin/produtosAdmin");
        } catch (error) {
            return res.render("admin/cadastroProduto", {error: "Erro ao cadastrar produto."})
        }
    },
    async deletarProduto(req, res) {
        try {
            const produtoDeletado = await Product.destroy({
                where: {
                    id: req.params.id
                }
            })

            if(!produtoDeletado)
                return res.render("admin/produtosAdmin", {error: "Produto não deletado.Tente Novamente", produtos: await Product.findAll()})
            return res.redirect("/admin/produtosAdmin")
        } catch (error) {
            return res.render("admin/produtosAdmin", {error: "Erro ao deletar produto.", produtos: await Product.findAll()})            
        }
    },
    async editarProduto(req, res){
        try {
            const produtoParaSerEditado = await Product.findOne({
                where: {id: req.params.id}
            })

            if(produtoParaSerEditado != null)
                return res.render('admin/editarProduto', {produto: produtoParaSerEditado})    
            return res.render('admin/produtosAdmin', {error: "Não há produtos cadastrado.", produtos: null})
        } catch (error) {
            res.render('admin/produtosAdmin', {error: "Erro ao tentar editar produto.", produtos: null})
        }
    },
    async salvarEdicao(req, res){
        try {
            const { name, preco, description } = req.body
            await Product.update({
                name,
                preco,
                description,
                image: req.file.filename,
                updated_at: new Date().toISOString()
            },
                {
                    where: {id: req.params.id},
                }
            );
            return res.redirect("/admin/produtosAdmin")
        } catch (error) {
            return res.render("admin/editarProduto", {error: "Erro ao tentar editar produto.", produto: req.body})
        }
    },
};

module.exports = produtoController;