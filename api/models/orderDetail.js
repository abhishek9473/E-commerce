const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class OrderDetail extends Model {
    static associate(models){
      OrderDetail.belongsTo(models.UserOrder, {foreignKey: "orderId"})
      OrderDetail.belongsTo(models.Product, { foreignKey: "productId" });
    }
  }

  OrderDetail.init(
    {
      orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "UserOrders",
          key: "id",
          as: "orderId",
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
      sellingPrice: { type: DataTypes.FLOAT, allowNull: false },
    },
    {
      sequelize,
      modelName: "OrderDetail",
    }
  );
  return OrderDetail;
};
