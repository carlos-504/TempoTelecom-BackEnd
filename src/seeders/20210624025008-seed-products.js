'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          name: 'Pacote de Cabide',
          value: 18.44,
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Carregador Smartphone',
          value: 41.54,
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Mini lanterna',
          value: 5.78,

          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Caixa de aluminio',
          value: 21.12,
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
