module.exports=(conection, DataTypes)=>{
    const Category = conection.define(
        "Category",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name:
            {
                type:DataTypes.STRING
            }
        },
        {
            tableName: "category",
            timestamps: false,
        }
    )
    return Category;
}