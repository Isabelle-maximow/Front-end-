// 6. Números Pares
// Crie uma função que receba um número e mostre todos os pares de 0 até esse
// número.
function mostrarPares(n) {
    for (let i = 0; i <= n; i += 2) {
        console.log(i);
    }
}
console.log("números pares até 10:");
mostrarPares(10);