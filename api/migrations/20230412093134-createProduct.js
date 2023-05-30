module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Products", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Categorys",
          key: "id",
          as: "categoryId",
        },
      },
      modelName: { type: Sequelize.STRING, allowNull: false },
      brandName: { type: Sequelize.STRING, allowNull: false },
      mrp: { type: Sequelize.FLOAT, allowNull: false },
      sellingPrice: { type: Sequelize.FLOAT, allowNull: false },
      imageSrc: { type: Sequelize.STRING },
      varient: { type: Sequelize.STRING },
      specification: { type: Sequelize.STRING },
      quantity: { type: Sequelize.INTEGER },
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
    await queryInterface.dropTable("Products");
  },
};
