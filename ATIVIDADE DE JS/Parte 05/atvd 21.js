// 21. Crie um programa que leia um número de 1 a 7 e mostre o dia da semana
// correspondente.
let dia = 3;
let nome_dia = "segunda";
let dia_semana = (dia === 1) ? "domingo" : (dia === 2) ? "segunda" 
: (dia === 3) ? "terça" : (dia === 4) ? "quarta" : (dia === 5) ? "quinta" : (dia === 6) ? "sexta" : (dia === 7) ? "sábado" : "Inválido";

console.log(dia_semana)