const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class UserOrder extends Model {
    // change model name
    static associate(models){
      UserOrder.hasMany(models.OrderDetail, { foreignKey: "orderId" });
    }
  }

  UserOrder.init(
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
     
      totalProduct: { type: DataTypes.INTEGER, allowNull: false },
      cartPrice: { type: DataTypes.FLOAT, allowNull: false },
      status: { type: DataTypes.STRING, allowNull: false },
      paymentMode: { type: DataTypes.STRING, allowNull: false },

    },
    {
      sequelize,
      modelName: "UserOrder",
    }
  );
  return UserOrder;
};
