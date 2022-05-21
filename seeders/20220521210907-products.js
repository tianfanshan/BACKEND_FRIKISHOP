'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Products', [{
            "name": "product1",
            "description": "description product1",
            "price": 10,
            "stock": 2495,
            "CategorieId": 1,
            "SetId": 2,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            "name": "product2",
            "description": "description product2",
            "price": 5.6,
            "stock": 295,
            "CategorieId": 2,
            "SetId": 3,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            "name": "product3",
            "description": "description product3",
            "price": 29.43,
            "stock": 25,
            "CategorieId": 3,
            "SetId": 2,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            "name": "product4",
            "description": "description product4",
            "price": 1.65,
            "stock": 3049,
            "CategorieId": 4,
            "SetId": 1,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            "name": "product5",
            "description": "description product5",
            "price": 37.65,
            "stock": 23495,
            "CategorieId": 4,
            "SetId": 2,
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