// 1. Crie uma variável que, quando exibida no console, mostre o valor Infinity.
let variavel;
variavel = 1/0;
console.log(variavel);

// 2. Crie uma variável com valor NaN usando Number() de forma proposital (tente converter algo que não é número).
let atvd;
atvd = Number("isso não é um numero")
console.log(atvd)

// 3. Crie uma variável com seu nome completo. Depois, crie outra variável que armazene o total de caracteres dessa string usando .length.
let nome_completo;
nome_completo = "isabelle Ferreira"
nome_completo.length
console.log(nome_completo.length)

// 4. Crie uma variável sem valor atribuído, exiba no console e comente no código qual tipo aparece.
let variavel2;
console.log(variavel2); // undefinied 

// 5. Crie uma constante chamada PI com valor 3.14. Depois, tente alterar o valor e comente no código o que aconteceu.
const PI = 3.14;
console.log(PI);
PI = 3.15 // TypeError: Assignment to constant variable.



