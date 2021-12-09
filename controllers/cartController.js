const { Cart } = require("../models");

const cartController={

    async cartController(req,res){
        try{
            const { name, preco, cartimage} = req.body;
            const { user } = req.session;

            const cartController = await Cart.create({
                name,
                preco,
                cartimage,
                userid: user.id
            })
            
            res.redirect("/carrinho")
            
        }catch(err){
            console.log(err)
            return res.redirect
        }
    },

    destroy: async(req, res)=>{
        const {user} = req.session;
        const {id} = req.params;

        const resultado = await Cart.destroy({
            where:{
                userid: user.id,
                id
            }
        })
        res.redirect("/carrinho")
    }
}

module.exports = cartController;