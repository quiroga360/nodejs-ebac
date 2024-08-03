/*
* EXERCÍCIO 4
* Faça uma função que receba como parâmetro o dia da semana (como um número, de 0 a 6)
* e retornea lista de veículos que possuem rodízio naquele dia
*/

const retornarRodizioDoDia = (dia) => {
    const veiculosDoDia = ["não tem rodízio", "1 e 2", "3 e 4", "5 e 6", "7 e 8", "9 e 0"];
    let index = parseInt(dia) === 6 ? 0 : parseInt(dia);
    return veiculosDoDia[index];
}

module.exports = { retornarRodizioDoDia };