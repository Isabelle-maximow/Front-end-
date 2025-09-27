// 11. Callback de Verificação
// Crie uma função que receba um número e um callback:
// • Se o número for par, o callback mostra "É par".
// • Se for ímpar, o callback mostra "É ímpar".

function verificarParidade(num, callback) {
    if (num % 2 === 0) {
        callback("é par");
    } else {
        callback("é ímpar");
    }
}  
verificarParidade(4, (mensagem) => console.log(mensagem)); // " par"
verificarParidade(7, (mensagem) => console.log(mensagem)); // "ímpar"
