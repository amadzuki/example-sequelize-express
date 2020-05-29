'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */

    return queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Marzuki',
          email: 'marzuki@example.com',
          age: 25,
          points: 7000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Ahmad',
          email: 'ahmad@example.com',
          age: 24,
          points: 3000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Haidar',
          email: 'haidar@example.com',
          age: 25,
          points: 9000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Maya',
          email: 'maya@example.com',
          age: 20,
          points: 3000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */

    return queryInterface.bulkDelete('Users', null, {})
  },
}
