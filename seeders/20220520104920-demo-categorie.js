'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Categories', [{
            name: 'categorie1',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            name: 'categorie2',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            name: 'categorie3',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            name: 'categorie4',
            createdAt: new Date(),
            updatedAt: new Date()
        }])
    },


    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};