'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Products.belongsToMany(models.Requests, {
        through: 'RequestProducts',
        as: 'requests',
        foreignKey: 'ProductId',
      });
    }
  }
  Products.init(
    {
      name: DataTypes.STRING,
      value: DataTypes.DOUBLE,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Products',
    }
  );
  return Products;
};
