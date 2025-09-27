// 12. Repetição com do...while
// Crie uma função que peça um número inicial e faça a contagem até 5 usando
// do...while.
function contagemDoWhile(n) {
    let i = n;
    do {
        console.log(i);
        i++;
    } while (i <= 5);
}
contagemDoWhile(3);