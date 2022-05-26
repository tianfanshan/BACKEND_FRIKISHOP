'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Sets', [{
                name: 'Set Valorant',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Set God of War',
                createdAt: new Date(),
                updatedAt: new Date()

            },
            {
                name: 'Set Assassins Creed',
                createdAt: new Date(),
                updatedAt: new Date()

            },
            {
                name: 'Set Attack on titan',
                createdAt: new Date(),
                updatedAt: new Date()

            },
            {
                name: 'Set Mario Bros',
                createdAt: new Date(),
                updatedAt: new Date()

            },
            {
                name: 'Set Señor de los Anillos',
                createdAt: new Date(),
                updatedAt: new Date()

            },
            {
                name: 'Set Dragon Ball',
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