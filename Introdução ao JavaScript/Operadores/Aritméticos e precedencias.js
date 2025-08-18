// Operadores Básicas: + - / *
// Precedências e/ou Prioridade: (), */, +-

// Media = Soma dos termos / Quantidade dos termos
// const media = 10 + 7 + 7/ 3
const media = (10 + 7 + 7)/ 3;
console.log(media);

/*
Esta errado o cálculo, devido a falta de ()
A divisão tem prioridade na soma
Primeiro ele está dividindo 10/3 e depois somando
*/

console.log(2 + 3 + 4); // 14, primeiro a multiplacação
console.log((2 + 3) * 4); // 20, primeiro o parenteses
console.log(2 * 3 ** 2); // 18, primeiro a potenciação 
console.log(20 / 5 * 2); // 8, primeiro a divisão 
console.log(2 * 20 / 5); 

console.log((50 % 7) + 3 ** 2 * 2); // % -> resto