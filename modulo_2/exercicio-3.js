/*
* EXERCÍCIO 3
* Ordene a sua lista de carros pelo nome do modelo em ordem alfabética
*/

const { carros } = require("./exercicio-1");

carros.sort((carro1, carro2) => {
    return carro1.modelo.localeCompare(carro2.modelo);
})

console.log(carros);