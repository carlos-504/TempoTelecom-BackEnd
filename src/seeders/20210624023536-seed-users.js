'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Carlos Henrique',
          number: '(61)9999-9999',
          birthDate: '1899-12-11',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Lucas Henrique',
          number: '(61)8888-8888',
          birthDate: '1899-12-11',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Carlos Eduardo',
          number: '(61)7777-7777',
          birthDate: '1899-12-11',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Pedro Henrique',
          number: '(61)5555-5555',
          birthDate: '1899-12-11',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
