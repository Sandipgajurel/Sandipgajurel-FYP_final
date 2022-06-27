'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  orders.init({
    orderId: DataTypes.INTEGER,
    productId: DataTypes.STRING,
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    price: DataTypes.STRING,
    quantity: DataTypes.STRING,
    singlePrice: DataTypes.STRING,
    email: DataTypes.STRING,
    date: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'orders',
  });
  return orders;
};