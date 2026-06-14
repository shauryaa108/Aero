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
      await queryInterface.bulkInsert('Airports', [
        { Name: 'Indira Gandhi International Airport', address: 'Delhi', cityId: 1, createdAt: new Date(), updatedAt: new Date() },
        { Name: 'Safdarjung Airport', address: 'Delhi', cityId: 1, createdAt: new Date(), updatedAt: new Date() },
        { Name: 'Hindon Airport', address: 'Delhi NCR', cityId: 1, createdAt: new Date(), updatedAt: new Date() },

        { Name: 'Chhatrapati Shivaji Maharaj International Airport', address: 'Mumbai', cityId: 2, createdAt: new Date(), updatedAt: new Date() },
        { Name: 'Juhu Aerodrome', address: 'Mumbai', cityId: 2, createdAt: new Date(), updatedAt: new Date() },
        { Name: 'Navi Mumbai International Airport', address: 'Navi Mumbai', cityId: 2, createdAt: new Date(), updatedAt: new Date() },

        { Name: 'Kempegowda International Airport', address: 'Bengaluru', cityId: 3, createdAt: new Date(), updatedAt: new Date() },
        { Name: 'HAL Airport', address: 'Bengaluru', cityId: 3, createdAt: new Date(), updatedAt: new Date() },

        { Name: 'Rajiv Gandhi International Airport', address: 'Hyderabad', cityId: 4, createdAt: new Date(), updatedAt: new Date() },
        { Name: 'Begumpet Airport', address: 'Hyderabad', cityId: 4, createdAt: new Date(), updatedAt: new Date() },

        { Name: 'Chennai International Airport', address: 'Chennai', cityId: 5, createdAt: new Date(), updatedAt: new Date() },
        { Name: 'Tambaram Air Force Station', address: 'Chennai', cityId: 5, createdAt: new Date(), updatedAt: new Date() },

        { Name: 'Netaji Subhas Chandra Bose International Airport', address: 'Kolkata', cityId: 6, createdAt: new Date(), updatedAt: new Date() },
        { Name: 'Behala Airport', address: 'Kolkata', cityId: 6, createdAt: new Date(), updatedAt: new Date() },

        { Name: 'Pune Airport', address: 'Pune', cityId: 7, createdAt: new Date(), updatedAt: new Date() },
        { Name: 'New Pune International Airport', address: 'Pune', cityId: 7, createdAt: new Date(), updatedAt: new Date() },

        { Name: 'Sardar Vallabhbhai Patel International Airport', address: 'Ahmedabad', cityId: 8, createdAt: new Date(), updatedAt: new Date() },
        { Name: 'Ahmedabad Domestic Terminal', address: 'Ahmedabad', cityId: 8, createdAt: new Date(), updatedAt: new Date() },

        { Name: 'Jaipur International Airport', address: 'Jaipur', cityId: 9, createdAt: new Date(), updatedAt: new Date() },
        { Name: 'Sanganer Airport', address: 'Jaipur', cityId: 9, createdAt: new Date(), updatedAt: new Date() },

        { Name: 'Chaudhary Charan Singh International Airport', address: 'Lucknow', cityId: 10, createdAt: new Date(), updatedAt: new Date() },
        { Name: 'Amausi Airstrip', address: 'Lucknow', cityId: 10, createdAt: new Date(), updatedAt: new Date() },

        { Name: 'Chandigarh International Airport', address: 'Chandigarh', cityId: 11, createdAt: new Date(), updatedAt: new Date() },
        { Name: 'Chandigarh Civil Enclave', address: 'Chandigarh', cityId: 11, createdAt: new Date(), updatedAt: new Date() },

        { Name: 'Sheikh ul-Alam International Airport', address: 'Srinagar', cityId: 12, createdAt: new Date(), updatedAt: new Date() },
        { Name: 'Srinagar Air Base', address: 'Srinagar', cityId: 12, createdAt: new Date(), updatedAt: new Date() },

        { Name: 'Raja Bhoj Airport', address: 'Bhopal', cityId: 13, createdAt: new Date(), updatedAt: new Date() },
        { Name: 'Bairagarh Airport', address: 'Bhopal', cityId: 13, createdAt: new Date(), updatedAt: new Date() },

        { Name: 'Devi Ahilyabai Holkar Airport', address: 'Indore', cityId: 14, createdAt: new Date(), updatedAt: new Date() },
        { Name: 'Indore Regional Airstrip', address: 'Indore', cityId: 14, createdAt: new Date(), updatedAt: new Date() },

        { Name: 'Jay Prakash Narayan Airport', address: 'Patna', cityId: 15, createdAt: new Date(), updatedAt: new Date() },
        { Name: 'Patna Civil Enclave', address: 'Patna', cityId: 15, createdAt: new Date(), updatedAt: new Date() },

        { Name: 'Cochin International Airport', address: 'Kochi', cityId: 16, createdAt: new Date(), updatedAt: new Date() },
        { Name: 'Naval Air Station Kochi', address: 'Kochi', cityId: 16, createdAt: new Date(), updatedAt: new Date() },

        { Name: 'Dabolim Airport', address: 'Goa', cityId: 17, createdAt: new Date(), updatedAt: new Date() },
        { Name: 'Manohar International Airport', address: 'Goa', cityId: 17, createdAt: new Date(), updatedAt: new Date() },

        { Name: 'Lokpriya Gopinath Bordoloi International Airport', address: 'Guwahati', cityId: 18, createdAt: new Date(), updatedAt: new Date() },
        { Name: 'Guwahati Domestic Terminal', address: 'Guwahati', cityId: 18, createdAt: new Date(), updatedAt: new Date() },

        { Name: 'Lal Bahadur Shastri International Airport', address: 'Varanasi', cityId: 19, createdAt: new Date(), updatedAt: new Date() },
        { Name: 'Babatpur Airport', address: 'Varanasi', cityId: 19, createdAt: new Date(), updatedAt: new Date() },

        { Name: 'Dr. Babasaheb Ambedkar International Airport', address: 'Nagpur', cityId: 20, createdAt: new Date(), updatedAt: new Date() },
        { Name: 'Nagpur Domestic Terminal', address: 'Nagpur', cityId: 20, createdAt: new Date(), updatedAt: new Date() },

        { Name: 'Mysore Airport', address: 'Mysore', cityId: 3, createdAt: new Date(), updatedAt: new Date() },
        { Name: 'Hubli Airport', address: 'Hubli', cityId: 3, createdAt: new Date(), updatedAt: new Date() },

        { Name: 'Agra Airport', address: 'Agra', cityId: 1, createdAt: new Date(), updatedAt: new Date() },
        { Name: 'Kanpur Airport', address: 'Kanpur', cityId: 10, createdAt: new Date(), updatedAt: new Date() },

        { Name: 'Surat Airport', address: 'Surat', cityId: 8, createdAt: new Date(), updatedAt: new Date() },
        { Name: 'Vadodara Airport', address: 'Vadodara', cityId: 8, createdAt: new Date(), updatedAt: new Date() },

        { Name: 'Mangalore International Airport', address: 'Mangalore', cityId: 3, createdAt: new Date(), updatedAt: new Date() },
        { Name: 'Calicut International Airport', address: 'Kozhikode', cityId: 16, createdAt: new Date(), updatedAt: new Date() },

        { Name: 'Trivandrum International Airport', address: 'Thiruvananthapuram', cityId: 16, createdAt: new Date(), updatedAt: new Date() },
        { Name: 'Madurai Airport', address: 'Madurai', cityId: 5, createdAt: new Date(), updatedAt: new Date() }
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
