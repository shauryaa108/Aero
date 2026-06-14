'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Cities', [
          {
            Name: 'Delhi',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            Name: 'Mumbai',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            Name: 'Bengaluru',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            Name: 'Hyderabad',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            Name: 'Chennai',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            Name: 'Kolkata',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            Name: 'Pune',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            Name: 'Ahmedabad',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            Name: 'Jaipur',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            Name: 'Lucknow',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            Name: 'Chandigarh',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            Name: 'Srinagar',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            Name: 'Bhopal',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            Name: 'Indore',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            Name: 'Patna',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            Name: 'Kochi',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            Name: 'Goa',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            Name: 'Guwahati',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            Name: 'Varanasi',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            Name: 'Nagpur',
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
