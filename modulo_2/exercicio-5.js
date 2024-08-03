/*
* EXERCÍCIO 5
* Faça um laço (while) que, com a ajuda de um contador, vá imprima a mensagem na tela: No dia X da semana, os veículos de rodízio são: [...]
* Utilize a função do exercício anterior dentro desse looping
*/

const { retornarRodizioDoDia } = require("./exercicio-4");
let i = 0;


while (i <= 6) {
    console.log(`No dia ${i} da semana, os veículos de rodízio são: ${retornarRodizioDoDia(i)}`);
    i++;
}