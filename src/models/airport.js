'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.City , {
        foreignKey:'cityId',
        onDelete:'CASCADE'
      }) // use of model name here
      this.hasMany(models.Flight, {
        foreignKey:'destinationAirportId',
        as:'destinationAirport',
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      })
      this.hasMany(models.Flight, {
        foreignKey:'departureAirportId',
        as:'departureAirport',
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      })
    }
  }
  Airport.init({
    Name: {
      type : DataTypes.STRING,
      allowNull:false,
      unique:true
    },
    address: DataTypes.STRING,
    cityId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Airport',
  });
  return Airport;
};