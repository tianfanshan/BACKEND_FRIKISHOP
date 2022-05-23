'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Users', [{
                username: 'Paquito Molina',
                email: "Paqito@gmail.com",
                password: '$2a$10$7Ba8zf09X8wz8GgTur9pVer4HahSg.R5jsSGa1k3T83qXsku6YKHa',
                adress: 'Calle Molona 69',
                role: 'user',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                username: 'Maria',
                email: "Maria@gmail.com",
                password: '1256',
                adress: 'Calle No Molona 85',
                role: 'user',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                username: 'Hijo de Maria y Paquito',
                email: "hijo@gmail.com",
                password: 'UnoDosTres',
                adress: 'Calle de enmedio',
                role: 'user',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                username: 'El Perro',
                email: "ElJefeInfiltrado@gmail.com",
                password: 'TheFuckingGau',
                adress: 'En el cesped de calle molona',
                role: 'SuperAdmin',
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