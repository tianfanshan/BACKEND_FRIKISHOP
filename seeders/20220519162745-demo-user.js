'use strict';
const bcrypt = require('bcryptjs')

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Users', [{
                username: 'Paquito Molina',
                email: "Paqito@gmail.com",
                password: bcrypt.hashSync("PacoGamer", 10),
                adress: 'Calle Molona 69',
                role: 'user',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                username: 'Maria',
                email: "Maria@gmail.com",
                password: bcrypt.hashSync("LahMari", 10),
                adress: 'Calle No Molona 85',
                role: 'user',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                username: 'Hijo de Maria y Paquito',
                email: "hijo@gmail.com",
                password: bcrypt.hashSync("MiMamaNoMeQuiereMiPapaTampocoElPerroTampoco", 10),
                adress: 'Calle de enmedio',
                role: 'user',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                username: 'El Perro',
                email: "ElJefeInfiltrado@gmail.com",
                password: bcrypt.hashSync("ElFuckingGuau", 10),
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