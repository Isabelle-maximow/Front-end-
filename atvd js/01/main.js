// 1. Soma de Números
// Crie uma função que receba um número e calcule a soma de todos os números de 1
// até ele usando um loop for.
function somaNumeros(n) {
    let soma = 0;
    for (let i = 1; i <= n; i++) {
        soma += i;
    }
    return soma;
}
console.log(somaNumeros(5)); // 15