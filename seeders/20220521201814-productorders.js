'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        return queryInterface.bulkInsert('ProductOrders', [{
            "ProductId": 1,
            "OrderId": 2,
            "amount": 20,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            "ProductId": 2,
            "OrderId": 2,
            "amount": 40,
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