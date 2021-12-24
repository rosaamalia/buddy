'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('newusers', [
      {
        nama : "Buddy",
        email : "Buddy@mail.com",
        password : "buddy",
        role : "admin",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        nama : "Bobo",
        email : "Bobo@mail.com",
        password : "bobo",
        role : "member",
        createdAt : new Date(),
        updatedAt : new Date()
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('newusers', null, {});
  }
};
