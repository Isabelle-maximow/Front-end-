// 23. Crie um programa que calcule o IMC e mostre a categoria (abaixo do peso,
// normal, sobrepeso, obesidade).
let peso = 70;
let altura = 1.75;
let imc = peso / (altura * altura);
let categoria = (imc < 18.5) ? "abaixo do peso" : (imc < 25) ? "normal" : (imc < 30) ? "sobrepeso" : "obesidade";

console.log(`IMC: ${imc}, Categoria: ${categoria}`);