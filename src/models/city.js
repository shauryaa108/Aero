'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class city extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here, use of model name in association
      this.hasMany(models.Airport, {
        foreignKey:'cityId'
      })
    }
  }
  city.init({
    Name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'city',
  });
  return city;
};