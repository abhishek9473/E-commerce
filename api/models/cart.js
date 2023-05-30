const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    // change model name
    // static associate(models){
    //   Cart.hasMany(models.Task, { foreignKey: "CartId" });
    // }
  }

  Cart.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
          as: "userId",
        },
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Products",
          key: "id",
          as: "productId",
        },
      },
      productQty: { type: DataTypes.INTEGER, allowNull: false },
      productPrice: { type: DataTypes.FLOAT, allowNull: false },
    },
    {
      sequelize,
      modelName: "Cart",
    }
  );
  return Cart;
};
