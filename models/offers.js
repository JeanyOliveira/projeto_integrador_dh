module.exports=(conection, DataTypes)=>{
    const Offers = conection.define(
        "Offers",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            productId:
            {
                type:DataTypes.INTEGER
            },
            productname:
            {
                type:DataTypes.STRING
            },
        
        },
    
        {
            tableName: "offers",
            timestamps: false,
        }

        
    )
    Offers.associate = (models) =>{
        Offers.belongsTo(models.Product,{
            foreignKey:"productId"
        });
        Offers.belongsTo(models.Product,{
            foreignKey:"productname"
        });
    }
    return Offers;
}