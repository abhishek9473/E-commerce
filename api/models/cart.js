const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    // change model name
    static associate(models) {
      // Cart.belongsTo(models.User, { foreignKey: "userId" });
      Cart.belongsTo(models.Product, { foreignKey: "productId" });
    }
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
    },
    {
      sequelize,
      modelName: "Cart",
    }
  );
  return Cart;
};
