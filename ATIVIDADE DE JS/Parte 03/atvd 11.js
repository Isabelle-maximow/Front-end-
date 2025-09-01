// 11. Crie um programa que receba a idade de uma pessoa e diga se ela pode:
// • Apenas votar (≥ 16 e < 18 ou ≥ 70)
// • Votar e dirigir (≥ 18)
// • Apenas estudar (≤ 15)

let idade = 19;
let pode_votar = (idade >= 16 && idade < 18) || idade >= 70;
let pode_dirigir = idade >= 18;
let apenas_estudar = idade <= 15;

console.log(`pode votar: ${pode_votar}`);
console.log(`pode dirigir: ${pode_dirigir}`);
console.log(`apenas estudar: ${apenas_estudar}`); 