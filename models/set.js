'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Set extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Set.hasMany(models.Product)
            Set.belongsToMany(models.Categorie, { through: models.SetCategorie })
        }
    }
    Set.init({
        name: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Set',
    });
    return Set;
};