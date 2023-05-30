'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable('Categorys', 'Categories');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable('Categories', 'Categorys');
  }
};
