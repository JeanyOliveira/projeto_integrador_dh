module.exports = (conection, DataTypes) => {
    const Produto = conection.define("Product", {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING(200),
        },
        aumont: {
          type: DataTypes.BIGINT,
        },
        preco: {
          type: DataTypes.DECIMAL,
        },
        status: {
          type: DataTypes.BOOLEAN,
        },
        description: {
          type: DataTypes.STRING(255),
        },
        image: {
          type: DataTypes.STRING(250),
        },
        category_id: {
            type: DataTypes.INTEGER,
          },
        brand_id: {
           type: DataTypes.INTEGER,
        },
        created_at: {
            type: DataTypes.DATE,
          },
        updated_at: {
            type: DataTypes.DATE
        },
      },
      {
        tableName: "product",
        timestamps: false,
      }
    );
  
      // Produto.associate = (models) => {
      //   Produto.belongsTo(models.Brand, {
      //     foreignKey: "brand_id",
      //   });

      //   Produto.associate(models.category, {
      //     foreignKey: "category_id",
      //   });
      // };
      
    return Produto;
  };