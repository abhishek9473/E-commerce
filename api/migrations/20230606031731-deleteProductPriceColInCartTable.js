module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Delete the column from the table
    await queryInterface.removeColumn('Carts', 'productPrice');
  },

  down: async (queryInterface, Sequelize) => {
    // Add the column back to the table in the down migration if needed
    await queryInterface.addColumn('Carts', 'productPrice', {
      type: Sequelize.STRING,
      allowNull: false
    });
  }
};
