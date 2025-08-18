// FALSY:
// ?: -> operador ternário
// sintaxe do operador ternário:
// condição ? valor_se_vdd : valor_se_falso

console.log(0 ? "verdadeiro" : "falso");
console.log(undefined ? "verdadeiro" : "falso");
console.log("" ? "verdadeiro" : "falso");

// se usuario n digitar nada no navegador, ele entende como "false"

// Truthy:
console.log(1 ? "REAL" : "FAKE");
console.log("0" ? "REAL" : "FAKE");
console.log(Infinity ? "REAL" : "FAKE");

let nome = ""
console.log(nome ? "Tem nome" : "vazio") // vazio

let idade = 18
console.log(idade >= 18 ? "Maior de idade" : "Menor de idade") // tipo um if e else 

let lista = [ 1, 2, 3]
console.log(lista.length > 0 ? "array com elementos" : "array vazio")

