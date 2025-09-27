// 10. Quantidade de Caracteres
// Crie uma função que receba uma string e conte quantos caracteres ela possui usando
// um loop for.
function contarCaracteres(str) {
    let contador = 0;
    for (let i = 0; i < str.length; i++) {
        contador++;
    }
    return contador;
}
console.log("quantidade de caracteres na string 'Olá, mundo!':", contarCaracteres("Olá, mundo!")); // 13