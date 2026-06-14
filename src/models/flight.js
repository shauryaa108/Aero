'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airplane, {
        foreignKey:'airplaneId',
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      })
      this.belongsTo(models.Airport, {
        foreignKey:'departureAirportId',
        as:'departureAirport',
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      })

      this.belongsTo(models.Airport, {
        foreignKey:'destinationAirportId',
        as:'destinationAirport',
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      })
      this.hasMany(models.Booking,{
        foreignKey:'flightId',
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      })
    }
  }
  Flight.init({
    flightNumber: {
      type:DataTypes.STRING,
      allowNull: false
    },
    airplaneId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    departureAirportId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    destinationAirportId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    arrival: {
      allowNull: false,
      type: DataTypes.DATE
    },
    departure: {
      allowNull: false,
      type: DataTypes.DATE
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    boardingGate: {
      type:DataTypes.STRING,
      allowNull:false
    },
    totalSeats: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    availableSeats: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};