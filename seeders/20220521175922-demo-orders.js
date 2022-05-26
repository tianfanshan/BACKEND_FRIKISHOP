'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Orders', [{
                "UserId": 1,
                "paid": false,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                "UserId": 2,
                "paid": false,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                "UserId": 3,
                "paid": false,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                "UserId": 4,
                "paid": false,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                "UserId": 5,
                "paid": false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                "UserId": 6,
                "paid": false,
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