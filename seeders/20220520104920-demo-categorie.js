'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Categories', [{
                name: 'Figuras',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                name: 'Tazas',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                name: 'Camisetas',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                name: 'Posters',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Chapas',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ])
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