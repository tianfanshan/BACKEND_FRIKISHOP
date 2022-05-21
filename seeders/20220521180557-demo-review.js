'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Reviews', [{
            "title": "mi review 1",
            "body": "Cuerpo de la reviewwwwwwwwwwwwwww ",
            "score": 3,
            "UserId": 1,
            "ProductId": 4,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            "title": "mi review 2",
            "body": "Cuerpo de la reviewwwwwwwwwwwwwww ",
            "score": 7,
            "UserId": 2,
            "ProductId": 1,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            "title": "mi review 3",
            "body": "Cuerpo de la reviewwwwwwwwwwwwwww ",
            "score": 9,
            "UserId": 3,
            "ProductId": 3,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            "title": "mi review 4",
            "body": "Cuerpo de la reviewwwwwwwwwwwwwww ",
            "score": 9,
            "UserId": 4,
            "ProductId": 1,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            "title": "mi review 5",
            "body": "Cuerpo de la reviewwwwwwwwwwwwwww ",
            "score": 10,
            "UserId": 2,
            "ProductId": 1,
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