'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Weblink extends Model {
    static associate(models) {
      Weblink.belongsTo(models.Account, {
        foreignKey: 'account_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    }
  };
  Weblink.init({
    url: DataTypes.STRING,
    favicon_url: DataTypes.STRING,
    accountID: {
      type: DataTypes.INTEGER,
      field: 'account_id',
      references: {
        model: 'account',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Weblink',
    tableName: 'weblinks'
  });
  return Weblink;
};