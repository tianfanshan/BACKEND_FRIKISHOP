'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Product.belongsTo(models.Categorie)
            Product.belongsTo(models.Set)
            Product.hasMany(models.Review)
            Product.belongsToMany(models.Order, { through: models.ProductOrders });

        }
    }
    Product.init({
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        price: DataTypes.FLOAT,
        stock: DataTypes.INTEGER,
        CategorieId: DataTypes.INTEGER,
        SetId: DataTypes.INTEGER,
        img: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Product',
    });
    return Product;
};