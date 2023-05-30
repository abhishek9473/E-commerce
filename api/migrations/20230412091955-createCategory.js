module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Categorys", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      categoeryName: { type: Sequelize.STRING, allowNull: false },
      imageSrc: { type: Sequelize.STRING },
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
    await queryInterface.dropTable("Categorys");
  },
};
