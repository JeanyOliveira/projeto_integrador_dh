module.exports=(conection, DataTypes)=>{
    const Cart = conection.define(
        "Cart",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name:
            {
                type:DataTypes.STRING
            },
            preco:
            {
                type:DataTypes.INTEGER
            },
            userid:
            {
                type:DataTypes.INTEGER
            },
            cartimage:
            {
                type:DataTypes.STRING
            },

        },
        {
            tableName: "cart",
            timestamps: false,
        }

        
    )
    Cart.associate = (models) =>{
        Cart.belongsTo(models.User,{
            foreignKey:"userid"
        });
        
        
    }
    return Cart;
}