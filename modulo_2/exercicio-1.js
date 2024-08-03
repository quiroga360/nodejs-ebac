/*
* EXERCÍCIO 1
* Crie uma lista de dicionários que contenha pelo menos 4 carros.
* Cada item da lista deve ser um dicionário representando um carro com as informações:
* placa, modelo e ano
*/

const carros = [
    { modelo: "onix", ano: 2020, placa: "ABC1D23" },
    { modelo: "hb20", ano: 2019, placa: "XYZ9F87" },
    { modelo: "compass", ano: 2023, placa: "EFG4H56" },
    { modelo: "kwid", ano: 2021, placa: "JKL5M67" }
];

console.log(carros);


module.exports = { carros };