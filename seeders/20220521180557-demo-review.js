'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Reviews', [{
                "title": "Guauuu",
                "body": "Tanto Mike como Vanesa prestan una atención maravillosa en la tienda, mi figura es increíble",
                "score": 10,
                "UserId": 1,
                "ProductId": 1,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                "title": "La tienda super!!",
                "body": "Ojalá hagan reformas y puedan incluir más cosas",
                "score": 8,
                "UserId": 4,
                "ProductId": 1,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                "title": "Ya tengo mi mochila personalizada!",
                "body": "Compré varias chapas de Valorant, estoy contento",
                "score": 7,
                "UserId": 2,
                "ProductId": 2,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                "title": "Más pequeña de lo que pensaba",
                "body": "Llegaron 3 chapas pero pensaba que eran más grandes",
                "score": 6,
                "UserId": 6,
                "ProductId": 2,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                "title": "La taza no calienta",
                "body": "Taza defectuosa que no cambiaba la imagen con el calor, pésimo",
                "score": 2,
                "UserId": 3,
                "ProductId": 3,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                "title": "La taza claro que calienta",
                "body": "La taza sí que calienta!! hay que ponerla con colacao :P",
                "score": 9,
                "UserId": 5,
                "ProductId": 3,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                "title": "Super fan de AC",
                "body": "A mi novia le encantó la figura",
                "score": 8,
                "UserId": 4,
                "ProductId": 4,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                "title": "Figuroteeee",
                "body": "Ojo a esaa figura tan espectacular que tengo ya en la estantería!!",
                "score": 9,
                "UserId": 2,
                "ProductId": 4,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                "title": "Llegó un poco más tarde",
                "body": "No me llegó cuando ponía el envío, aún así contento con la figura",
                "score": 7,
                "UserId": 2,
                "ProductId": 5,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                "title": "Ultra fan de Levi",
                "body": "Estoy enamorada de él!!!",
                "score": 10,
                "UserId": 5,
                "ProductId": 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                "title": "Junto a mi colección",
                "body": "Me encanta este par, mario bros a topeee",
                "score": 9,
                "UserId": 2,
                "ProductId": 6,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                "title": "Se me cayó la figura :(",
                "body": "Pensaba que eran más duras, se me rompió en pedacitos",
                "score": 6,
                "UserId": 2,
                "ProductId": 6,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                "title": "Buen precio",
                "body": "He recomendado la tienda a todos mis amigxs frikis",
                "score": 8,
                "UserId": 2,
                "ProductId": 7,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                "title": "Casi todos ya",
                "body": "Después de Vegeta, solo me queda ya Yamcha jajaja",
                "score": 8,
                "UserId": 5,
                "ProductId": 7,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                "title": "Otro más",
                "body": "Lo vi más barato por Amazon",
                "score": 5,
                "UserId": 2,
                "ProductId": 8,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                "title": "Precio top",
                "body": "Pues yo no lo encontré por Amazon",
                "score": 8,
                "UserId": 2,
                "ProductId": 8,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                "title": "Ya no me caben más",
                "body": "Otro póster que sumar en mi cuarto,yujuuuu",
                "score": 8,
                "UserId": 2,
                "ProductId": 9,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                "title": "Llegaba tiempo buscándolo",
                "body": "Estaban agotados en todas las tiendas menos en esta, qué suerte!",
                "score": 8,
                "UserId": 2,
                "ProductId": 9,
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