'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Orders.belongsToMany(models.Products, {
        through: 'OrderProducts',
        as: 'products',
        foreignKey: 'OrderId',
      });
      Orders.belongsTo(models.Users, { foreignKey: 'UserId' });
    }
  }
  Orders.init(
    {
      totalValue: DataTypes.DOUBLE,
    },
    {
      sequelize,
      modelName: 'Orders',
    }
  );
  return Orders;
};
