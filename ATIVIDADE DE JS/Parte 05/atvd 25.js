// 25. Crie um programa que pergunte dois números.
// • Se forem iguais, mostre “Números iguais”.
// • Se não, mostre o maior.

let num1 = 5;
let num2 = 10;
let maior = (num1 === num2) ? "numeros iguais" : (num1 > num2) ? num1 : num2;

console.log(maior);