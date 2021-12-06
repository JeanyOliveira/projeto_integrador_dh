const { Cart } = require("../models");

const cartController={
    async cartController(req,res){
        try{
            const {name, preco} = Cart;
            const { user } = req.session;

            const cartController = await Cart.create({
                name,
                preco,
                userid: user.id
            })
            
            res.redirect("/home")
            
        }catch(err){
            console.log(err)
            return res.redirect
        }
    },

}

module.exports = cartController;