'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('SetCategories', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            SetId: {
                type: Sequelize.INTEGER
            },
            CategorieId: {
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('SetCategories');
    }
};