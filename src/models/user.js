'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Booking, {
        foreignKey:'userId',
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      })
    }
  }
  User.init({
    username: {
        type: DataTypes.STRING,
        unique:true,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique:true,
        allowNull: false,
        validate:{
        isEmail:true
    }
      },
    password: {
    type: DataTypes.STRING,
    allowNull:false
}
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};