// 19. Crie uma calculadora que receba dois números e um operador (+, -, *, /). Mostre
// o resultado.
let num1 = 10;
let num2 = 5;
let operador = '+';
let resultado = (operador === '+') ? (num1 + num2) : (operador === '-') ? (num1 - num2) : (operador === '*') ? (num1 * num2) 
: (operador === '/') ? (num1 / num2) : 'Operador inválido';

console.log(`o resultado é ${resultado}`)