'use strict';
const bcrypt = require('bcryptjs')

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Users', [{
                username: 'Paquito Molina',
                email: "Paqito@gmail.com",
                password: bcrypt.hashSync("PacoGamer", 10),
                adress: 'Calle Molona 69',
                img: "01.png",
                role: 'user',
                confirmed: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                username: 'Maria',
                email: "Maria@gmail.com",
                password: bcrypt.hashSync("LahMari", 10),
                adress: 'Calle No Molona 85',
                img: "02.png",
                role: 'user',
                confirmed: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                username: 'Hijo de Maria y Paquito',
                email: "hijo@gmail.com",
                password: bcrypt.hashSync("MiMamaNoMeQuiereMiPapaTampocoElPerroTampoco", 10),
                adress: 'Calle de enmedio',
                img: "03.png",
                role: 'user',
                confirmed: true,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                username: 'El pescatero',
                email: "pescatero@gmail.com",
                password: bcrypt.hashSync("PescaoFresco", 10),
                adress: 'Calle de detrás',
                img: "04.png",
                role: 'user',
                confirmed: true,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                username: 'La panadera',
                email: "pan@gmail.com",
                password: bcrypt.hashSync("TodoCrujiente", 10),
                adress: 'Calle principal',
                img: "05.png",
                role: 'user',
                confirmed: true,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                username: 'Hijo de panadera',
                email: "hijopanes@gmail.com",
                password: bcrypt.hashSync("MiMamaNoMeQuiere", 10),
                adress: 'Sin calle',
                img: "06.png",
                role: 'user',
                confirmed: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                username: 'El Perro',
                email: "ElJefeInfiltrado@gmail.com",
                password: bcrypt.hashSync("ElFuckingGuau", 10),
                adress: 'En el cesped de calle molona',
                img: "perro.png",
                role: 'SuperAdmin',
                confirmed: true,
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