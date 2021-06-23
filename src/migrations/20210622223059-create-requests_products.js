'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('RequestProducts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      RequestId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Requests', key: 'id' },
        onDelete: 'CASCADE',
      },
      ProductId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Products', key: 'id' },
        onDelete: 'CASCADE',
      },
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('RequestProducts');
  },
};
