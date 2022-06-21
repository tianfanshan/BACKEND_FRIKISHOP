'use strict';
const {
    Model,
    TINYINT
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            User.hasMany(models.Order)
            User.hasMany(models.Review)
            User.hasMany(models.Token)
        }
    }
    User.init({
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Introduce un username"
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notNull: {
                    msg: "Intruduce un email"
                },
                isEmail: {
                    msg: "Introduce un email valdido"
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Intruduce un correo"
                }
            }
        },
        adress: DataTypes.STRING,
        role: DataTypes.STRING,
        confirmed: DataTypes.BOOLEAN,
        img: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};