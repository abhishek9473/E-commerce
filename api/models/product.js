const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    // static associate(models){
    //   Product.hasMany(models.Task, { foreignKey: "userId" });
    // }
  }

  Product.init(
    {
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Categories",
          key: "id",
          as: "categoryId",
        },
      },
      modelName: { type: DataTypes.STRING, allowNull: false },
      brandName: { type: DataTypes.STRING, allowNull: false },
      mrp: { type: DataTypes.FLOAT, allowNull: false },
      sellingPrice: { type: DataTypes.FLOAT, allowNull: false },
      imageSrc: { type: DataTypes.STRING },
      varient: { type: DataTypes.STRING },
      specification: { type: DataTypes.STRING },
      quantity: { type: DataTypes.INTEGER },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
