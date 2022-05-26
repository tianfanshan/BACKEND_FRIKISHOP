'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class SetCategorie extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    SetCategorie.init({
        SetId: DataTypes.INTEGER,
        CategorieId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'SetCategorie',
    });
    return SetCategorie;
};