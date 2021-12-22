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

    await queryInterface.bulkInsert('Categories', [
      {
        nama_kategori: "Puisi",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_kategori: "Pantun",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_kategori: "Cerpen",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_kategori: "Dongeng",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
