'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ProductOrders extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    ProductOrders.init({
        amount: DataTypes.INTEGER,
        ProductId: DataTypes.INTEGER,
        OrderId: DataTypes.INTEGER,

    }, {
        sequelize,
        modelName: 'ProductOrders',
    });
    return ProductOrders;
};