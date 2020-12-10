'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Account extends Model {

        static associate(models) {
            Account.hasMany(models.Todo, {
                foreignKey: 'account_id',
                as: 'todos',
                onDelete: 'cascade',
                onUpdate: 'cascade'
            }),
                Account.hasMany(models.Weblink, {
                    foreignKey: 'account_id',
                    as: 'weblinks',
                    onDelete: 'cascade',
                    onUpdate: 'cascade'
                })
        }
    };
    Account.init({
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
                notEmpty: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        zipCode: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                len: [5, 11]
            }
        },
        focus: DataTypes.STRING,
        focusExpiry: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Account',
        tableName: 'accounts'
    });
    return Account;
};