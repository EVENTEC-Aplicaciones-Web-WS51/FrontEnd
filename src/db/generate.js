/*
{
    "eventos": [
    {
        "id": 1,
        "tipo": "concierto",
        "nombre": "Concierto de Jazz en el Parque",
        "fecha": "2024-06-25",
        "hora": "18:00",
        "lugar": "Parque Central",
        "artista": "Orquesta de Jazz Y",
        "precio_entrada": 15,
        "descripcion": "¡Disfruta de una tarde relajante con los mejores sonidos de jazz en vivo!"
    },
*/

module.exports = function (){
    var faker = require('faker');
    var _ = require('lodash');

    return {
        people: _.times(100, function (n) {
            return {
                id: n + 1,
                name: faker.name.findName()
            }
        })
    }
}