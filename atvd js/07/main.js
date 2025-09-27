// Crie uma função que receba dois números e um callback.
// O callback deve ser: soma, subtração, multiplicação ou divisão.
function calcular(a, b, callback) {
    return callback(a, b);
}

function soma(x, y) {
    return x + y;
}

function subtracao(x, y) {
    return x - y;
}

function multiplicacao(x, y) {
    return x * y;
}

function divisao(x, y) {
    return x / y;
}

console.log("Soma:", calcular(5, 3, soma));
console.log("Subtração:", calcular(5, 3, subtracao));
console.log("Multiplicação:", calcular(5, 3, multiplicacao));
console.log("Divisão:", calcular(5, 3, divisao));