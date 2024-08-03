/*
* EXERCÍCIO 2
* Utilizando manipulações de lista (push) adicione o seguinte dicionário a sua lista de carros: { modelo: “t-cross”, ano: 2022, placa: “DFC3R43” }
*/

const { carros } = require("./exercicio-1");

carros.push({ modelo: "t-cross", ano: 2022, placa: "DFC3R43" });

console.log(carros);