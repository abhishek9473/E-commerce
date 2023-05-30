'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Users', 'role', {
      type: Sequelize.ENUM("admin", "user", "guest"),
      allowNull: false,
      after: 'number'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Users', 'role', {
      type: Sequelize.ENUM("admin", "user", "guest"),
      allowNull: false,
      after: 'updatedAt'
    });
  }
};
