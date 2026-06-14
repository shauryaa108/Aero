'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      airplaneId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        onDelete :'CASCADE',
        onUpdate:'CASCADE',
        references:{
          model:'Airplanes', // use of table name here
          key:'id',
        },
      },
      flightNumber: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      boardingGate: {
        type: Sequelize.STRING,
        allowNull:false
      },
      totalSeats: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      availableSeats: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      departureAirportId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        onDelete :'CASCADE',
        onUpdate:'CASCADE',
        references:{
          model:'Airports', // use of table name here
          key:'id',
        },
      },
      destinationAirportId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        onDelete :'CASCADE',
        onUpdate:'CASCADE',
        references:{
          model:'Airports', // use of table name here
          key:'id',
        },
      },
      departure: {
        type: Sequelize.DATE,
        allowNull:false
      },
      arrival: {
        type: Sequelize.DATE,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Flights');
  }
};