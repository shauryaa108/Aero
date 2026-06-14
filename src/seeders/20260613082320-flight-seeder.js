'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const airplanes = await queryInterface.sequelize.query(
      'SELECT id, capacity FROM Airplanes',
      {
        type: Sequelize.QueryTypes.SELECT
      }
    );

    const airports = await queryInterface.sequelize.query(
      'SELECT id FROM Airports',
      {
        type: Sequelize.QueryTypes.SELECT
      }
    );

    const now = new Date();
    const flights = [];

    for (let i = 1; i <= 500; i++) {

      const departureAirport =
        airports[Math.floor(Math.random() * airports.length)];

      let destinationAirport;

      do {
        destinationAirport =
          airports[Math.floor(Math.random() * airports.length)];
      } while (
        destinationAirport.id === departureAirport.id
      );

      const airplane =
        airplanes[Math.floor(Math.random() * airplanes.length)];

      const departure = new Date();

      departure.setDate(
        departure.getDate() +
        Math.floor(Math.random() * 30)
      );

      departure.setHours(
        Math.floor(Math.random() * 24),
        Math.floor(Math.random() * 60),
        0,
        0
      );

      const arrival = new Date(departure);

      arrival.setHours(
        arrival.getHours() +
        (1 + Math.floor(Math.random() * 5))
      );

      flights.push({
        flightNumber: `FL${String(i).padStart(4, '0')}`,

        airplaneId: airplane.id,

        departureAirportId: departureAirport.id,

        destinationAirportId: destinationAirport.id,

        departure,

        arrival,

        price: 3000 + Math.floor(Math.random() * 22000),

        boardingGate:
          String.fromCharCode(
            65 + Math.floor(Math.random() * 6)
          ) +
          (1 + Math.floor(Math.random() * 30)),

        totalSeats: airplane.capacity,

        availableSeats: airplane.capacity,

        createdAt: now,
        updatedAt: now
      });
    }

    await queryInterface.bulkInsert(
      'Flights',
      flights,
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      'Flights',
      null,
      {}
    );
  }
};