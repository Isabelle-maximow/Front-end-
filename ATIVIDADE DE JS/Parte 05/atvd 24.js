// 24. Em uma empresa:
// • Se o funcionário trabalhar mais de 8h/dia, ganha hora extra de R$ 20 por
// hora.
// • Mostre o salário final de quem trabalhou horas em um dia, sabendo que o
// salário-hora é R$ 15.

let horas_trabalhadas = 10;
let salario_hora = 15;
let salario = horas_trabalhadas * salario_hora;
let horas_extras = (horas_trabalhadas > 8) ? (horas_trabalhadas - 8) : 0; salario += horas_extras * 20;

console.log(`Salário final: R$ ${salario}`);