// 18. Crie um programa que receba três lados e diga se é um triângulo:
// • Se sim, classifique como equilátero, isósceles ou escaleno.

let lado1 = 5;
let lado2 = 4;
let lado3 = 5;

let tipo_triangulo = (lado1 === lado2 && lado2 === lado3) ? "equilatero" : (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) ? "isosceles" : "escaleno";

console.log(`o triangulo dado é um ${tipo_triangulo}`)