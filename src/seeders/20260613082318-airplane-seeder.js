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
    await queryInterface.bulkInsert('Airplanes', [
        { modelNumber: 'A320-001', capacity: 180, createdAt: new Date(), updatedAt: new Date() },
        { modelNumber: 'A320-002', capacity: 180, createdAt: new Date(), updatedAt: new Date() },
        { modelNumber: 'A320-003', capacity: 180, createdAt: new Date(), updatedAt: new Date() },
        { modelNumber: 'A320-004', capacity: 180, createdAt: new Date(), updatedAt: new Date() },
        { modelNumber: 'A320-005', capacity: 180, createdAt: new Date(), updatedAt: new Date() },

        { modelNumber: 'A321-001', capacity: 220, createdAt: new Date(), updatedAt: new Date() },
        { modelNumber: 'A321-002', capacity: 220, createdAt: new Date(), updatedAt: new Date() },
        { modelNumber: 'A321-003', capacity: 220, createdAt: new Date(), updatedAt: new Date() },
        { modelNumber: 'A321-004', capacity: 220, createdAt: new Date(), updatedAt: new Date() },
        { modelNumber: 'A321-005', capacity: 220, createdAt: new Date(), updatedAt: new Date() },

        { modelNumber: 'B737-001', capacity: 189, createdAt: new Date(), updatedAt: new Date() },
        { modelNumber: 'B737-002', capacity: 189, createdAt: new Date(), updatedAt: new Date() },
        { modelNumber: 'B737-003', capacity: 189, createdAt: new Date(), updatedAt: new Date() },
        { modelNumber: 'B737-004', capacity: 189, createdAt: new Date(), updatedAt: new Date() },
        { modelNumber: 'B737-005', capacity: 189, createdAt: new Date(), updatedAt: new Date() },

        { modelNumber: 'B737MAX-001', capacity: 210, createdAt: new Date(), updatedAt: new Date() },
        { modelNumber: 'B737MAX-002', capacity: 210, createdAt: new Date(), updatedAt: new Date() },
        { modelNumber: 'B737MAX-003', capacity: 210, createdAt: new Date(), updatedAt: new Date() },
        { modelNumber: 'B737MAX-004', capacity: 210, createdAt: new Date(), updatedAt: new Date() },
        { modelNumber: 'B737MAX-005', capacity: 210, createdAt: new Date(), updatedAt: new Date() },

        { modelNumber: 'A220-001', capacity: 140, createdAt: new Date(), updatedAt: new Date() },
        { modelNumber: 'A220-002', capacity: 140, createdAt: new Date(), updatedAt: new Date() },
        { modelNumber: 'A220-003', capacity: 140, createdAt: new Date(), updatedAt: new Date() },
        { modelNumber: 'A220-004', capacity: 140, createdAt: new Date(), updatedAt: new Date() },
        { modelNumber: 'A220-005', capacity: 140, createdAt: new Date(), updatedAt: new Date() },

        { modelNumber: 'ATR72-001', capacity: 78, createdAt: new Date(), updatedAt: new Date() },
        { modelNumber: 'ATR72-002', capacity: 78, createdAt: new Date(), updatedAt: new Date() },
        { modelNumber: 'ATR72-003', capacity: 78, createdAt: new Date(), updatedAt: new Date() },
        { modelNumber: 'ATR72-004', capacity: 78, createdAt: new Date(), updatedAt: new Date() },
        { modelNumber: 'ATR72-005', capacity: 78, createdAt: new Date(), updatedAt: new Date() },

        { modelNumber: 'Q400-001', capacity: 90, createdAt: new Date(), updatedAt: new Date() },
        { modelNumber: 'Q400-002', capacity: 90, createdAt: new Date(), updatedAt: new Date() },
        { modelNumber: 'Q400-003', capacity: 90, createdAt: new Date(), updatedAt: new Date() },
        { modelNumber: 'Q400-004', capacity: 90, createdAt: new Date(), updatedAt: new Date() },
        { modelNumber: 'Q400-005', capacity: 90, createdAt: new Date(), updatedAt: new Date() },

        { modelNumber: 'A319-001', capacity: 156, createdAt: new Date(), updatedAt: new Date() },
        { modelNumber: 'A319-002', capacity: 156, createdAt: new Date(), updatedAt: new Date() },
        { modelNumber: 'A319-003', capacity: 156, createdAt: new Date(), updatedAt: new Date() },
        { modelNumber: 'A319-004', capacity: 156, createdAt: new Date(), updatedAt: new Date() },
        { modelNumber: 'A319-005', capacity: 156, createdAt: new Date(), updatedAt: new Date() },

        { modelNumber: 'B787-001', capacity: 290, createdAt: new Date(), updatedAt: new Date() },
        { modelNumber: 'B787-002', capacity: 290, createdAt: new Date(), updatedAt: new Date() },
        { modelNumber: 'B787-003', capacity: 290, createdAt: new Date(), updatedAt: new Date() },
        { modelNumber: 'B787-004', capacity: 290, createdAt: new Date(), updatedAt: new Date() },
        { modelNumber: 'B787-005', capacity: 290, createdAt: new Date(), updatedAt: new Date() },

        { modelNumber: 'A350-001', capacity: 325, createdAt: new Date(), updatedAt: new Date() },
        { modelNumber: 'A350-002', capacity: 325, createdAt: new Date(), updatedAt: new Date() },
        { modelNumber: 'A350-003', capacity: 325, createdAt: new Date(), updatedAt: new Date() },
        { modelNumber: 'A350-004', capacity: 325, createdAt: new Date(), updatedAt: new Date() },
        { modelNumber: 'A350-005', capacity: 325, createdAt: new Date(), updatedAt: new Date() },

        { modelNumber: 'E190-001', capacity: 114, createdAt: new Date(), updatedAt: new Date() },
        { modelNumber: 'E190-002', capacity: 114, createdAt: new Date(), updatedAt: new Date() },
        { modelNumber: 'E190-003', capacity: 114, createdAt: new Date(), updatedAt: new Date() },
        { modelNumber: 'E190-004', capacity: 114, createdAt: new Date(), updatedAt: new Date() },
        { modelNumber: 'E190-005', capacity: 114, createdAt: new Date(), updatedAt: new Date() },

        { modelNumber: 'CRJ900-001', capacity: 90, createdAt: new Date(), updatedAt: new Date() },
        { modelNumber: 'CRJ900-002', capacity: 90, createdAt: new Date(), updatedAt: new Date() },
        { modelNumber: 'CRJ900-003', capacity: 90, createdAt: new Date(), updatedAt: new Date() },
        { modelNumber: 'CRJ900-004', capacity: 90, createdAt: new Date(), updatedAt: new Date() },
        { modelNumber: 'CRJ900-005', capacity: 90, createdAt: new Date(), updatedAt: new Date() }
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
