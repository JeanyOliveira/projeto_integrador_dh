const { Category } = require("../models");

const deletarCategoria={
    async deletar(req,res) {
        const {name} = req.body;
        const deletando = await Category.destroy({ 
           name });
        
       }
}



module.exports = deletarCategoria;