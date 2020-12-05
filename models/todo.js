'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Todo.belongsTo(models.Account, {
        foreignKey: 'account_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    }
  };
  Todo.init({
    description: DataTypes.STRING,
    complete: DataTypes.BOOLEAN,
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
    modelName: 'Todo',
    tableName: 'todos'
  });
  return Todo;
};