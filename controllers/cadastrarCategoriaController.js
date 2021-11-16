const { Category } = require("../models");

const cadastarCategoriaController={
    async category(req,res){
        try{
            const {name} = req.body;

            const category = await Category.create({
                name
            })
            res.redirect("/admin/cadastroCategoria")
        }catch(err){
            console.log(err)
            return res.redirect
        }
    }
}

module.exports = cadastarCategoriaController;