module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("OrderList", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      orderId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "UserOrders",
          key: "id",
          as: "orderId",
        },
      },
      productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Products",
          key: "id",
          as: "productId",
        },
      },
      totalProduct: { type: Sequelize.INTEGER, allowNull: false },
      cartPrice: { type: Sequelize.FLOAT, allowNull: false },
      status: { type: Sequelize.STRING, allowNull: false },
      paymentMode: { type: Sequelize.STRING, allowNull: false },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("OrderList");
  },
};
