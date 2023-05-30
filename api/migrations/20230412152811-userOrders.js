module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("UserOrders", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
          as: "userId",
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
    await queryInterface.dropTable("UserOrders");
  },
};
