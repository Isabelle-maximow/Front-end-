// 15. Um cinema vende ingressos a R$ 20.
// • Crianças até 12 anos pagam metade.
// • Idosos (≥ 60) pagam 70% do valor.
// • Mostre o valor do ingresso.

let ingresso = 20;
let idade = 12;
let valor_ingresso = (idade <= 12) ? ingresso / 2 : (idade >= 60) ? ingresso * 0.7 : ingresso;

console.log(`o valor do ingresso ficou: ${valor_ingresso}`)