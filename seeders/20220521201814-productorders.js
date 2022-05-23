'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        return queryInterface.bulkInsert('ProductOrders', [{
            "ProductId": 1,
            "OrderId": 2,
            "amount": 2,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            "ProductId": 2,
            "OrderId": 2,
            "amount": 4,
            createdAt: new Date(),
            updatedAt: new Date()

        }, {
            "ProductId": 7,
            "OrderId": 1,
            "amount": 5,
            createdAt: new Date(),
            updatedAt: new Date()

        }, {
            "ProductId": 8,
            "OrderId": 1,
            "amount": 1,
            createdAt: new Date(),
            updatedAt: new Date()

        }, {
            "ProductId": 8,
            "OrderId": 3,
            "amount": 2,
            createdAt: new Date(),
            updatedAt: new Date()

        }, {
            "ProductId": 1,
            "OrderId": 3,
            "amount": 1,
            createdAt: new Date(),
            updatedAt: new Date()

        }, {
            "ProductId": 5,
            "OrderId": 4,
            "amount": 2,
            createdAt: new Date(),
            updatedAt: new Date()

        }, {
            "ProductId": 9,
            "OrderId": 4,
            "amount": 1,
            createdAt: new Date(),
            updatedAt: new Date()

        }, {
            "ProductId": 9,
            "OrderId": 5,
            "amount": 7,
            createdAt: new Date(),
            updatedAt: new Date()

        }, {
            "ProductId": 9,
            "OrderId": 5,
            "amount": 7,
            createdAt: new Date(),
            updatedAt: new Date()

        }, {
            "ProductId": 3,
            "OrderId": 6,
            "amount": 1,
            createdAt: new Date(),
            updatedAt: new Date()

        }, {
            "ProductId": 7,
            "OrderId": 6,
            "amount": 2,
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