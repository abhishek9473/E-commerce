module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Users", "role", {
      type: Sequelize.ENUM("admin", "user", "guest"),
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Users", "role", {
      type: Sequelize.ENUM("admin", "user", "guest"),
    });
  },
};
