'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Sets', [{
                name: 'Set1',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Set2',
                createdAt: new Date(),
                updatedAt: new Date()

            },
            {
                name: 'Set3',
                createdAt: new Date(),
                updatedAt: new Date()

            },
            {
                name: 'Set4',
                createdAt: new Date(),
                updatedAt: new Date()

            },
            {
                name: 'Set5',
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