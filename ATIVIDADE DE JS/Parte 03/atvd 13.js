// 13. Um caixa eletrônico só aceita saques múltiplos de 10. Crie um programa que diga
// se um valor de saque é válido ou inválido.

let valor_saque = 30;
let saque_valido = valor_saque % 10 === 0;
let saque_invalido = valor_saque % 10 !== 0;

console.log(`status do saque: ${saque_valido ? "válido" : "inválido"}`)